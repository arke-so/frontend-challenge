import type { SvelteComponent } from 'svelte'

import Accounting from './accounting.svelte'
import Archive from './archive.svelte'
import Arke from './Arke.svelte'
import ArkeLogoOnly from './ArkeLogoOnly.svelte'
import ArrowLeftCircle from './arrow-left-circle.svelte'
import ArrowLeft from './arrow-left.svelte'
import Box from './box.svelte'
import Boxes from './boxes.svelte'
import Calendar from './calendar.svelte'
import Cart from './cart.svelte'
import Check from './check.svelte'
import ChevronRight from './chevron-right.svelte'
import Crown from './crown.svelte'
import Download from './download.svelte'
import X from './icon-x.svelte'
import Logout from './logout.svelte'
import LongArrowLeftUp from './long-arrow-left-up.svelte'
import Menu from './menu.svelte'
import Minus from './minus.svelte'
import Pencil from './pencil.svelte'
import PlusCircle from './plus-circle.svelte'
import Plus from './plus.svelte'
import Potion from './potion.svelte'
import Refresh from './refresh.svelte'
import Search from './search.svelte'
import Settings from './settings.svelte'
import Shop from './shop.svelte'
import SwitchOff from './switchOff.svelte'
import SwitchOn from './switchOn.svelte'
import Trash from './trash.svelte'
import Upload from './upload.svelte'
import Users from './users.svelte'

export type Icon = SvelteComponent

export const IconSize = Object.freeze({
  Micro: 'w-3',
  Button: 'w-3.5',
  Small: 'w-4 h-4',
  Medium: 'w-5',
  Large: 'w-6',
})

export const IcoNoir = {
  Accounting,
  Archive,
  Arke,
  ArkeLogoOnly,
  ArrowLeft,
  ArrowLeftCircle,
  Box,
  Boxes,
  Calendar,
  Cart,
  Check,
  Crown,
  ChevronRight,
  Download,
  Logout,
  LongArrowLeftUp,
  Menu,
  Minus,
  Pencil,
  Plus,
  PlusCircle,
  Potion,
  Refresh,
  Settings,
  Search,
  Shop,
  SwitchOff,
  SwitchOn,
  Trash,
  Users,
  Upload,
  X,
}
