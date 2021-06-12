import css from './Blueprint.module.scss'

const Blueprint = () => (
  <div className={css.blueprint}>
    <div className={css.verticalContainer}>
      <div className={css.verticalLine}></div>
      <div className={css.verticalLine}></div>
    </div>
    <div className={css.horizontalContainer}>
      <div className={css.horizontalLine}></div>
      <div className={css.horizontalLine}></div>
    </div>
  </div>
)

export default Blueprint
