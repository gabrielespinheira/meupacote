import React, { useEffect, useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <>
      <div className="div">
        <h1>meupacote</h1>

        <p>URL para obter informações sobre as encomendas</p>
        <code>{url}api/codes?codes=123|456</code>

        <p>*Permitir enviar mais de uma encomenda por vez, separados com "|"</p>

        <a href="https://ogabrielaraujo.com.br/" target="_blank">
          Créditos: Gabriel Araujo
        </a>
      </div>

      <style global jsx>{`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        html,
        body,
        #__next {
          height: 100%;
        }
        body {
          font-family: Arial;
          font-size: 18px;
          color: #333;
        }
        a {
          color: #2353ff;
          margin-top: 30px;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        h1 {
          font-size: 42px;
          margin-bottom: 40px;
        }
        p {
          font-size: 18px;
          margin-bottom: 15px;
        }
        code {
          background-color: #eee;
          border-radius: 7px;
          padding: 10px;
          margin-bottom: 20px;
        }
      `}</style>
    </>
  )
}
