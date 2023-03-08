import { Box } from "@chakra-ui/layout"
import { IconButton, Table, Th, Thead, Tr } from "@chakra-ui/react"
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlineClockCircle } from "react-icons/ai"

export const SongsTable = ({songs}) => {
  return (
    <Box className="bg-transparent" color={"white"}>
      <Box padding={"10px"} marginBottom="20px">
        <Box marginBottom={"30px"}>
        <IconButton aria-label="play playlist" icon={<BsFillPlayFill fontSize={"30px"} />} colorScheme="green" size={"lg"} isRound />
        </Box>
        <Table variant={"unstyled"}>
          <Thead borderBottom={"1px solid"} borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
        </Table>
      </Box>
    </Box>
  )
}
