import Head from './head.svelte'
import Regular from './regular-table.svelte'
import Row from './row.svelte'
import Cell from './table-cell.svelte'
import Header from './table-header.svelte'
import Root from './table-virtualized.svelte'
import Body from './tbody.svelte'

export type UnknownWithID = any & { id: string }

const components = {
  Header,
  Head,
  Body,
  Row,
  Cell,
}

export const InfiniteTable = {
  Root,
  ...components,
}

export const Table = {
  Root: Regular,
  ...components,
}
