import "./styles/QuoteBox.css"


const QuoteBox = ({ phrase, handleChangeQuote }) => {
  return (
    <section className="quoteBox">


      <article className="quoteBox__phrase, rectangle">
        <p>{phrase}</p>
      </article>

      <article>
        <button className="quoteBox__btn" onClick={handleChangeQuote}>See another</button>
      </article>

    </section>
  )
}
export default QuoteBox