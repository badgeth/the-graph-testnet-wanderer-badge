import { BigInt } from "@graphprotocol/graph-ts";
import { BadgeAward, BadgeDefinition, Metadata, Protocol, Winner } from "../generated/schema";
import { BADGE_DESCRIPTION, BADGE_NAME, PROTOCOL_NAME } from "./constants";

export function awardTestnetWandererBadge(
  winnerAddress: string,
  blockNumber: BigInt,
  transactionHash: string
): BadgeAward {
  // Only 1 TestnetWandererBadge per User Allowed
  let badgeAward = BadgeAward.load(winnerAddress);

  if (badgeAward == null) {
    let winner = provideWinner(winnerAddress);
    winner.badgeCount = winner.badgeCount + 1;
    winner.save()

    let badgeDefinition = provideBadgeDefinition();

    badgeDefinition.badgeCount = badgeDefinition.badgeCount + 1;
    badgeDefinition.save();

    badgeAward = new BadgeAward(winnerAddress);
    badgeAward.winner = winnerAddress;
    badgeAward.definition = badgeDefinition.id;
    badgeAward.blockAwarded = blockNumber;
    badgeAward.globalBadgeNumber = badgeDefinition.badgeCount;
    badgeAward.winnerBadgeNumber = 1;
    badgeAward.transactionHash = transactionHash
    badgeAward.save();
  }
  return badgeAward as BadgeAward;
}

export function provideWinner(address: string): Winner {
  let winner = Winner.load(address);

  if (winner == null) {
    winner = new Winner(address);
    winner.badgeCount = 0;
    winner.save();
  }

  return winner as Winner;
}

export function provideBadgeDefinition(): BadgeDefinition {
  let badgeDefinition = BadgeDefinition.load(BADGE_NAME);

  if (badgeDefinition == null) {
    let protocol = provideProtocol();

    badgeDefinition = new BadgeDefinition(BADGE_NAME);
    badgeDefinition.protocol = protocol.id;
    badgeDefinition.description = BADGE_DESCRIPTION;
    badgeDefinition.image = "TBD";
    badgeDefinition.artist = "TBD";
    badgeDefinition.badgeCount = 0;

    badgeDefinition.save();
  }

  return badgeDefinition as BadgeDefinition;
}


export function provideProtocol(): Protocol {
  let protocol = Protocol.load(PROTOCOL_NAME);

  if (protocol == null) {
    protocol = new Protocol(PROTOCOL_NAME);
    protocol.save();
  }

  return protocol as Protocol;
}


export function addMetadata(badgeAward: BadgeAward, key: string, value: string): Metadata {
  let id = badgeAward.id.concat("-").concat(key)

  let metadata = new Metadata(id);
  metadata.badgeAward = badgeAward.id;
  metadata.key = key;
  metadata.value = value;
  metadata.save();
  return metadata as Metadata;
}
