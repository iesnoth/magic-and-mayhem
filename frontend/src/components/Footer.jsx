//import LeftLightFoot from '../assets/leftlightfooter.png'

function Footer(theme) {
    return (
        <>
            <div className="footer-images">
                {{ theme } === 'light' ? (
                    <>
                        <div className="light">
                            <img src={require("../assets/leftlightfooter.png")} alt="left footer stalagmite" />
                            <img src="../assets/rightlightfoot.png" alt="right footer stagamite" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="dark">
                            <img src="../assets/leftdrkfoot.png" alt="left footer stalagmite" />
                            <img src="../assets/rightdarkfoot.png" alt="right footer stagamite" />
                        </div>
                    </>
                )}
            </div>
            <footer className="footer">
                <img src="./assets/leftlightfooter.png" alt="cat" />
            </footer>
        </>
    )

}

export default Footer