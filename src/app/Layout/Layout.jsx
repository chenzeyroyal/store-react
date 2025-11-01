import Header from "@/widgets/Header";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
