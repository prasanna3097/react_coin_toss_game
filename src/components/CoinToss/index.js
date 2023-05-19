// Write your code here
import {Component} from 'react'
import './index.css'

const HeadsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    headsTailsImageUrl: HeadsImageUrl,
    headCount: 0,
    tailsCount: 0,
  }

  changeHeadTailsImage = () => {
    const {headCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let resultImages = ''
    let headCoin = headCount
    let tailCoin = tailsCount

    if (tossResult === 0) {
      resultImages = HeadsImageUrl
      headCoin += 1
    } else {
      resultImages = TailsImageUrl
      tailCoin += 1
    }

    this.setState({
      headsTailsImageUrl: resultImages,
      headCount: headCoin,
      tailsCount: tailCoin,
    })
  }

  render() {
    const {headsTailsImageUrl, headCount, tailsCount} = this.state
    const totalCount = headCount + tailsCount
    return (
      <div className="bg-container">
        <div className="coin-toss-game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={headsTailsImageUrl} className="image" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.changeHeadTailsImage}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
