import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { articlesData } from "../data/articles"

function ArticlePage() {
  const { id } = useParams()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [revealed, setRevealed] = useState(false)

  const article = articlesData
    .flatMap((section) =>
      section.articles.map((a) => ({ ...a, category: section.category }))
    )
    .find((item) => item.id === Number(id))

  if (!article) return <h2 style={{ padding: "4rem" }}>Article not found</h2>

  const total = article.reflection.length

  const handleSelect = (option) => {
    const newAnswers = { ...answers, [currentQuestion]: option }
    setAnswers(newAnswers)
    setTimeout(() => {
      if (currentQuestion < total - 1) {
        setCurrentQuestion((q) => q + 1)
      } else {
        setRevealed(true)
      }
    }, 400)
  }

  return (
    <div className="wp-article">
      <Link to="/" className="wp-back">← Back</Link>

      <p className="wp-article-category">{article.category}</p>
      <h1 className="wp-article-title">{article.title}</h1>
      <p className="wp-article-summary">{article.summary}</p>
      <span className="wp-pattern-pill">{article.patternTag}</span>

      {!revealed ? (
        <>
          <p className="wp-reflection-label">Reflect</p>

          <div className="wp-progress">
            {article.reflection.map((_, i) => (
              <div
                key={i}
                className={`wp-progress-dot ${
                  i === currentQuestion
                    ? "active"
                    : i < currentQuestion
                    ? "done"
                    : ""
                }`}
              />
            ))}
          </div>

          <p className="wp-question" key={currentQuestion}>
            {article.reflection[currentQuestion].question}
          </p>

          <div className="wp-options">
            {article.reflection[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`wp-option ${
                  answers[currentQuestion] === option ? "selected" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="wp-counter">{currentQuestion + 1} / {total}</p>
        </>
      ) : (
        <div className="wp-pattern-reveal">
          <p className="wp-pattern-reveal-label">Your pattern</p>
          <p className="wp-pattern-reveal-text">{article.patternTag}</p>
          <p className="wp-pattern-reveal-sub">
            This pattern lives in world events and in personal ones alike.
            The same impulse that shapes headlines shapes decisions.
          </p>
          <Link to="/" className="wp-back-home">← Read another</Link>
        </div>
      )}
    </div>
  )
}

export default ArticlePage