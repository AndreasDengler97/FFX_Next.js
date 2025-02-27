import Layout from "../../components/layout";
import Image from "next/image";
import { Grid, Typography, Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Ixion() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Typography variant="h4" component="h2">
        Ixion
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="basic tabs"
            textColor="none"
            indicatorColor="none"
          >
            <Tab label="Maesters" href={`/maesters/`} />
            <Tab label="Summoners" href={`/summoners/`} />
            <Tab label="Aeons" href={`/aeons/`} />
          </Tabs>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Ixion.jpg"
              height={300}
              width={361}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Ixion"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Ixion is a lightning elemental aeon and resembles a unicorn, with
              a long golden horn and dark blue skin with a gray mane and tail.
              Ixion can self heal with lightning spells and will absorb any
              lightning spells cast upon him. Ixion can manipulate lightning, an
              affinity represented by the electric motif of his magic circle.
              The symbol for Ixion and Djose is annotated with the kanji for
              thunder (雷 kaminari). You will need to complete a Cloister of
              Trials in the Djose Temple to obtain him.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              Ixion's high defense and magic defense attributes make it a good
              aeon to summon when the party needs protections from an attack.
              Ixion's unique attack is Aerospark, where he fires spinning,
              razor-sharp discs that converge on a single enemy and causes
              non-elemental damage. The attack also negates magical effects like
              Protect, Shell, Reflect, Haste, Regen and the NulAll spells.
              Ixion's exclusive traits protect him from instant death and all
              negative side effects except Curse and Eject.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/Ixion_Artwork.webp"
              height={300}
              width={499}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Ixion"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Image
              src="/images/fayth_ixion.webp"
              height={300}
              width={217}
              style={{
                margin: "auto",
                borderRadius: "5px",
              }}
              alt="Ixion"
            />
          </Grid>
          <Grid item xs={12} md={8} marginTop={5}>
            <Typography variant="body1" component="p">
              His overdrive is Thor's Hammer, which envelopes all enemies in a
              storming vortex, and then disintegrates it. Lightning based
              elemental damage is inflicted against all enemies. Ixion's armor
              contains Sensor, Break HP Limit, Break MP Limit and Lightning
              Eater. Ixion can inflict more thank 9999 HP damage once you've
              activated Kimahri's Spirit Lance. After obtaining Spirit Lance
              Ixion gains Break Damage limit.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
