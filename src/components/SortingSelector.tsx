import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { FaChevronCircleDown } from 'react-icons/fa'
import useGameQueryStore from '../stores'

export default function SortingSelector() {
  const sorting = useGameQueryStore((state) => state.queryParams.sorting)
  const updateSorting = useGameQueryStore((state) => state.setSorting)

  const sortOrders = [
    { value: '', name: 'Relevance' }, //default
    { value: '-released', name: 'Release date' },
    { value: '-rating', name: 'Average rating' },
    { value: '-added', name: 'Date added' },
    { value: '-metacritic', name: 'Popularity' },
    { value: 'name', name: 'Name' }
  ]

  const selectedSortOrder = sortOrders.find((order) => order.value === sorting)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<Icon as={FaChevronCircleDown} />}>
        <Text as='span'>Order by: </Text>
        <Text as='span' fontWeight='700'>
          {selectedSortOrder?.name || 'Relevance'}
        </Text>
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => updateSorting(order.value)}>
            {order.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
