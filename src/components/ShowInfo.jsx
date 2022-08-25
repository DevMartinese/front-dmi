import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ShowsContext from '../context/showsContext';
import { Flex, Box, Image, Text, Button } from '@chakra-ui/react';

const ShowInfo = () => {
  const showsContext = useContext(ShowsContext);
  const { getInfo, info } = showsContext;

  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    getInfo(id);

    // eslint-disable-next-line
  }, [id]);

  const { image, name, summary } = info;

  let parsedSummary = summary ? summary.replace(/<[^>]*>?/gm, '') : 'Review not available';

  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
    >
      <Box
        maxW='sm'
        border='1px'
        borderRadius='lg'
        overflow='hidden'
      >
        <Image src={
          image == null
            ? 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
            : image.original
        }
          alt={name}
        />

        <Box p='6'>
          <Text as='b'>Title:</Text> {name}
          <br />
          <Text as='b'>Description:</Text> {parsedSummary}
          <Button
            colorScheme='green'
            width="full"
            onClick={() => onNavigateBack()}
          >
            Volver
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default ShowInfo;