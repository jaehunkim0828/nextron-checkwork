import React from 'react';
import Head from 'next/head';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Layout from '../components/organisms/layout';
import Main from '../components/organisms/Main';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  })
);

function Home() {

  return (
    <Layout>
      <div className='app'>
        <Main />
      </div>
    </Layout>
  );
};

export default Home;
