
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type IconStyle = "fa-solid" | "fa-regular" ;


type Prefix<Prefix extends string, T extends string> = `${Prefix}${T}`;
export type IconType = Prefix<"fa-", IconName>


type Concat<Pre extends string, After extends string> =  `${Pre} ${After}`

export type IconProp = Concat<IconStyle, IconType>;