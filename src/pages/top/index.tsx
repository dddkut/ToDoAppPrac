import { Layout } from "@/components/Layout";
import styles from "./styles.module.scss";
import { ListContainer } from "@/components/ListContainer";
import { statusNames } from "@/constants/statusNames";

export default function Top() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contentsWrapper}>
          //TODO: statusに合うタスクをfilterして回す
          {/* {statusNames.map((statusName) => {

             <ListContainer statusName={statusName.status} task={task}></ListContainer>;
          })} */}
        </div>
      </div>
    </Layout>
  );
}
