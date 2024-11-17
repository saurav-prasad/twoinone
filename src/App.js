import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-[#282c34] h-screen">
      <header className="px-28 py-10 w-[50%] m-auto text-white space-y-4">
        <h4 className='text-3xl'>
          *Actually there was only one field for both the Code link and the Deployed link. Since I have two projects to submit.
        </h4>

        {/*  deployment */}
        <div className='flex flex-col items-start justify-center space-y-1'>
          <h1 className='text-xl'>Deployed Link</h1>
          <div className='flex justify-center items-center space-x-2'>
            <h1>Charts app link:</h1>
            <a
              className="App-link"
              href="https://rok8-chart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rok8-chart.vercel.app/
            </a>
          </div>

          <div className='flex justify-center items-center space-x-2'>
            <h1>Email app link:</h1>
            <a
              className="App-link"
              href="https://rok8-email.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://rok8-email.vercel.app/
            </a>
          </div>
        </div>

        {/*  github */}
        <div className='flex flex-col items-start justify-center space-y-1'>
          <h1 className='text-xl'>Code Link</h1>
          <div className='flex justify-center items-center space-x-2'>
            <h1>Charts app link:</h1>
            <a
              className="App-link"
              href="https://github.com/saurav-prasad/rok8-chart"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/saurav-prasad/rok8-chart
            </a>
          </div>

          <div className='flex justify-center items-center space-x-2'>
            <h1>Email app link:</h1>
            <a
              className="App-link"
              href="https://github.com/saurav-prasad/rok8-email"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/saurav-prasad/rok8-email
            </a>
          </div>
        </div>




      </header>
    </div>
  );
}

export default App;
