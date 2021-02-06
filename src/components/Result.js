import Template from "./Template";

const Result = ({ message, result, handleRestart }) => {
  return (
    <div>
      <Template
        step={`Результат рассчета`}
        title={result === "ok" ? "Успешно" : "Ошибка"}
      >
        <h5 style={{ color: result === "ok" ? "blue" : "red" }}>{message}</h5>
      </Template>
      <button onClick={() => handleRestart()}>Новый расчет</button>
    </div>
  );
};

export default Result;
