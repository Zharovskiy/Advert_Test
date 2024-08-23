import css from "./ContentMarkup.module.css";

const ContentMarkup = ({ aside, content }) => {
  return (
    <div className={css.container}>
      <aside className={css.sideBox}>{aside}</aside>
      <section className={css.content}>{content}</section>
    </div>
  );
};

export default ContentMarkup;
