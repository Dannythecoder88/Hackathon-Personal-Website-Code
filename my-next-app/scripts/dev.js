const { spawn, exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

const port = 3010;

async function killPort(port) {
  try {
    // For macOS/Linux
    await execPromise(`lsof -ti:${port} | xargs kill -9 2>/dev/null`);
    console.log(`Successfully killed process on port ${port}`);
  } catch (error) {
    // If the port is already free, we can continue
    if (!error.message.includes('No such process') && 
        !error.message.includes('xargs') &&
        !error.message.includes('no process found')) {
      console.error('Error killing process:', error);
    }
  }
}

async function startDevServer() {
  try {
    await killPort(port);
    
    // Kill any existing processes on the port first
    await killPort(port);
    
    // Add a small delay to ensure the port is fully released
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Starting Next.js development server...');
    
    // Start the Next.js dev server using spawn
    const nextProcess = spawn('next', ['dev', '--port', port.toString()], {
      stdio: 'inherit',
      shell: true
    });
    
    nextProcess.on('error', (error) => {
      console.error('Failed to start Next.js dev server:', error);
      process.exit(1);
    });
    
    nextProcess.on('close', (code) => {
      console.log(`Next.js dev server exited with code ${code}`);
      process.exit(code || 0);
    });
    
    // Handle process termination
    process.on('SIGINT', () => {
      console.log('Shutting down Next.js dev server...');
      nextProcess.kill('SIGINT');
    });
    
  } catch (error) {
    console.error('Error starting dev server:', error);
    process.exit(1);
  }
}

startDevServer();
