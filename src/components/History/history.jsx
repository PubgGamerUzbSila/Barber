import historyCss from "./history.module.css";
const History = () => {
  return (
    <>
      <div className={historyCss.historyContainer}>
        <div className={historyCss.historyLeft}></div>
        <div className={historyCss.historyRight}>
          <h3>
            <span>Our</span> History
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page w hen looking at.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page w hen looking at.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </>
  );
};
export default History;
