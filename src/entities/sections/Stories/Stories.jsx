import Section from "@/widgets/Section/Section";
import styles from "./Stories.module.scss";
import classNames from "classnames";

const Stories = () => {
  const links = [
    {
      href: "/",
      image: "src/shared/assets/images/story-1.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-2.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-3.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-1.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-2.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-3.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-1.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-2.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-3.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-1.jpg",
    },
    {
      href: "/",
      image: "src/shared/assets/images/story-2.jpg",
    },
  ];
  return (
    <Section className={classNames(styles.stories, "container")}>
      <ul className={styles.list}>
        {links.map(({ href, image }, index) => (
          <li className={styles.listItem} key={index}>
            <a className={styles.listLink} href={href}>
              <img className={styles.image} src={image} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Stories;
