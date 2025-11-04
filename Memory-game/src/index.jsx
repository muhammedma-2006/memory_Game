
function index() {
    function easy(){
        window.location.href="./easy.jsx";
    }
  return (

    <div className="main">
        <div className="header">
            <div className="text-8xl mb-6 animate-pulse">🧠</div>
            <h1>Memory Match</h1>
            <p>Choose Your Challenge</p>
        </div>
        
        <div className="cards">
            <button className="card" onclick="easy()">
                <span class="text-3xl group-hover:animate-bounce">😊</span>
                <div >
                    <h2>Easy (4x4)</h2>
                    <p className="para">16 cards</p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="card">
               <span className="text-3xl group-hover:animate-bounce">🤔</span>
                <div>
                    <h2>Medium (6x6)</h2>
                    <p className="para">36 cards</p>
                </div>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="card">
                <span className="text-3xl group-hover:animate-bounce">🤯</span>
                <div>
                    <h2>Hard (8x8)</h2>
                    <p className="para">64 cards</p>
                </div>
               <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
        </div>
        <p>🎯 Match all pairs to win </p>
        <p>⏱️ Try to beat your best time</p> 
        <p>🔄 Keep your moves to a minimum</p> 
    </div>
    
  )
}
export default index