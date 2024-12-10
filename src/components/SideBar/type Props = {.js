type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [isSideBar, setIsSideBar] = useState(false);

  const swichSideBarOpen = () => {
    console.log(isSideBar);
    setIsSideBar(!isSideBar);
  };

  return (
    <div>
      <Head>
        <title>DicordClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <header className={styles.header}>
          <MenuOutlinedIcon
            fontSize="large"
            className={styles.sideBarButton}
            onClick={() => void swichSideBarOpen()}
          />
          <div className={styles.centerWrapper}>
            <h1>PRACTICE</h1>
            <img
              src="/images/lizardIcon.svg"
              width={35}
              height={35}
              //className={styles.image}
            />
          </div>
        </header>
      </>
      <main className={styles.main}>
        <SideBar isSideBar={isSideBar} />
        {children}
      </main>
    </div>
  );
};


type Props = { isSideBar: boolean };

export const SideBar = React.memo(({ isSideBar }: Props) => {
  console.log(isSideBar);
  return (
    <nav className={styles.sideBarWrapper}>
      <div className={styles.sideBarContent}>
        <h4>SideBar</h4>
      </div>
    </nav>
  );
});

でボタンクリック時に console.log(isSideBar);が2回実行されるのはなぜ