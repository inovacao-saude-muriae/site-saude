import styles from "./page.module.css";
import Carousel from "../components/Carousel";
import NoticiasSection from "../components/NoticiasSection";
import EventosSection from "../components/EventosSection";

export default function Page() {
  return (
    <section className={styles.container}>
      <Carousel />
      <NoticiasSection />
      <EventosSection />
    </section>
  );
}
