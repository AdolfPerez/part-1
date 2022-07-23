const Content = ({content}) => content.map(cnt => <p>{cnt[0]} {cnt[1]}</p>)

export default Content