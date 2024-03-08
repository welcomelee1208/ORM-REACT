import logo from './logo.svg'
import './App.css'

function App() {
    //해당 컴퍼넌트의 로직구현 영역
    console.log('app.js 화면이 랜더링 됩니다.')
    // console.error("강제로에러 발생시키기");
    // console.warn("경고메세지 출력");
    // console.info("개발과 관련된 추가정보를 출력한다.");
    // console.document(" 텍스트를 출력합니다.");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>리액트 세상에 오신것을 환영합니다.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
