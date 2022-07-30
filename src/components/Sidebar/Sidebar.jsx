import styles from './Sidebar.module.css'
import {FiEdit3} from 'react-icons/fi'
import { Avatar } from '../Avatar/avatar'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover} src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      
      <div className={styles.profile}>
        <Avatar url="https://avatars.githubusercontent.com/u/94790993?v=4" hasBorder />
        <strong>Matheus Oliveia</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href='#'>
          <FiEdit3 />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}