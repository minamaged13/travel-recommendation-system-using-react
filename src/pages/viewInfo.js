import ViewInfo from '@/components/ViewInfo';
import {useRouter} from 'next/router';
import {Fragment} from 'react';
const viewInfo = () => {
  const router = useRouter ();
  const query = router.query;
  console.log ("query data",query);
  return (
    <Fragment>
      <ViewInfo id={query.id} type={query.type} />

    </Fragment>
  );
};
export default viewInfo;
