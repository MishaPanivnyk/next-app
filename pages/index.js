import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
const IndexPage = () => {
  const quotes = [
    "Життя - це те, що з тобою відбувається, поки ти будуєш плани.",
    "Успіх - це здатність йти від однієї невдачі до іншої, не втрачаючи ентузіазму.",
    "Успіх - це не кінцева точка, успіх - це шлях.",
    "Життя - це 10% того, що з вами трапляється, і 90% того, як ви реагуєте на це.",
    "Найкращий спосіб передбачити майбутнє - його створити.",
    "Ви здатні на більше, ніж уявляєте.",
    "Все, що вам потрібно для досягнення успіху, вже є всередині вас.",
    "Тільки той, хто ризикує, може справді жити.",
    "Немає великих обмежень, крім тих, які ви створюєте в своєму розумі.",
    "Успіх - це не ключ до щастя. Щастя - це ключ до успіху. Якщо ви любите те, що ви робите, ви будете успішними.",
    "Найкращий час посадити дерево - 20 років тому. Наступний найкращий час - зараз.",
    "Ваша майбутність залежить від того, що ви робите сьогодні.",
    "Успіх - це не кінцева станція, а постійна подорож.",
  ];
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className={styles.container}>
      <h1>Цитати дня</h1>
      <div className={styles.quote}>
        <p className={styles.text}>Ось випадкова цитата для натхнення:</p>
        <p className={styles.quote}>"{quote}"</p>
      </div>
      <button className={styles.btn} onClick={getRandomQuote}>
        Оновити
      </button>
    </div>
  );
};

export default IndexPage;
