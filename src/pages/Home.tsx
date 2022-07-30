import { Header } from "../components/Header";
import { Posts } from "../components/Posts/Posts";
import { Sidebar } from "../components/Sidebar/Sidebar";
import styles from "./Home.module.css"

export function Home(){

  const posts = [
    {
      id: 1,
      author: {
        name: "Matheus Oliveira",
        avatar: "https://avatars.githubusercontent.com/u/94790993?v=4",
        role: "Web developer"
      },
      content: [
        {type: "paragraph", content: "Fala galeraa 👋"},
        {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: "link", content: "👉 jane.design/doctorcare"}
      ],
      publishedAt: new Date("2022-06-07 18:00:00")
    },
    {
      id: 2,
      author: {
        name: "Joalison ferreira",
        avatar: "https://avatars.githubusercontent.com/u/44754105?v=4",
        role: "Web Design"
      },
      content: [
        {type: "paragraph", content: "Fala galeraa 👋"},
        {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: "link", content: "👉 jane.design/doctorcare"}
      ],
      publishedAt: new Date("2022-06-07 08:00:00")
    },
    {
      id: 3,
      author: {
        name: "Joalison ferreira",
        avatar: "https://avatars.githubusercontent.com/u/44754105?v=4",
        role: "Web Design"
      },
      content: [
        {type: "paragraph", content: "Fala galeraa 👋"},
        {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: "link", content: "👉 jane.design/doctorcare"}
      ],
      publishedAt: new Date("2022-06-07 08:00:00")
    }
  ]

  return(
    <div className={styles.homeContainer}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post)=> (
            <Posts
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}