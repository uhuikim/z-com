import style from './home.module.css'
import Tab from './_component/Tab'
import PostForm from './_component/PostForm'
import TabProvider from './_component/TabProvider';

export default function Page() {
  return (
    <TabProvider>
      <main className={style.main}>
        <Tab />
        <PostForm />
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </main>
    </TabProvider>
  );
}
