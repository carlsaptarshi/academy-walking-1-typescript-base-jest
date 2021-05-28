import {Player} from "./player";
import {Outcome} from "./outcome";

export const play = (player: Player, _coordinate: Coordinate): Outcome => player === Player.X ? Outcome.Played : Outcome.Invalid;
