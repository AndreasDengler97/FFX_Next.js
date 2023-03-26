import Layout from "../../components/layout";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Bahamut() {
  return (
    <Layout>
      <h1>Bahamut</h1>
      <Link href={`/maesters/`}> Maesters |</Link>
      <Link href={`/summoners/`}> Summoners |</Link>
      <Link href={`/aeons/`}> Aeons</Link>
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Layout>
  );
}