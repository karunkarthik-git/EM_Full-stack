import styles from './page.module.css'
import Sample from './sample'

export default function Home() {
  const data = [{"name":"Karun"}, {"name":"Karthik"},{"name":"EduMoon"}, {"name":"KK"},{"name":"OK"}]
  return (
    <Sample data={data}/>
  )
}
