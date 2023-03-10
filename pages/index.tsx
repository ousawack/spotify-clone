import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {

  const {user} = useMe()

  return (
    <GradientLayout
      color={"gray"}
      image={
        "https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      }
      subtitle={"profile"}
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      roundImage
    >
      <Box color={"white"} paddingX="40px">
        <Box marginBottom={"40px"}>
          <Text fontSize={"2xl"} fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize={"md"}>Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX={"10px"} width="20%">
              <Box
                bg={"gray.900"}
                borderRadius="4px"
                padding={"15px"}
                width="100%"
              >
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius={"100%"}
                />
                <Box marginTop={"20px"}>
                  <Text fontSize={"large"}>{artist.name}</Text>
                  <Text fontSize={"small"}>Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  console.log(artists);

  return {
    props: { artists },
  };
};

export default Home;
