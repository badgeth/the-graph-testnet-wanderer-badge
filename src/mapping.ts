import { log } from "@graphprotocol/graph-ts"
import {
  Signalled
} from "../generated/Curation/Curation"
import {
  SubgraphPublished
} from "../generated/GNS/GNS"
import {
  AllocationCreated, StakeDelegated
} from "../generated/Staking/Staking"
import { addBadgeAwardDataItem, awardTestnetWandererBadge } from "./models"

export function handleSubgraphPublished(event: SubgraphPublished): void {
  log.info("Subgraph Published", [])
  let badgeAward = awardTestnetWandererBadge(event.params.graphAccount.toHexString(), event.block.number, event.transaction.hash.toHexString())
  addBadgeAwardDataItem(badgeAward, "role", "Developer")
  addBadgeAwardDataItem(badgeAward, "action", "Subgraph Published")
}

export function handleStakeDelegated(event: StakeDelegated): void {
  log.info("Stake Delegated", [])
  let badgeAward = awardTestnetWandererBadge(event.params.delegator.toHexString(), event.block.number, event.transaction.hash.toHexString())
  addBadgeAwardDataItem(badgeAward, "role", "Delegator")
  addBadgeAwardDataItem(badgeAward, "action", "Stake Delegated")
}

export function handleAllocationCreated(event: AllocationCreated): void {
  log.info("Allocation Created", [])
  let badgeAward = awardTestnetWandererBadge(event.params.indexer.toHexString(), event.block.number, event.transaction.hash.toHexString())
  addBadgeAwardDataItem(badgeAward, "role", "Indexer")
  addBadgeAwardDataItem(badgeAward, "action", "Allocation Created")
}

export function handleSignalled(event: Signalled): void {
  log.info("Subgraph Signalled", [])
  let badgeAward = awardTestnetWandererBadge(event.params.curator.toHexString(), event.block.number, event.transaction.hash.toHexString())
  addBadgeAwardDataItem(badgeAward, "role", "Curator")
  addBadgeAwardDataItem(badgeAward, "action", "Subgraph Signalled")
}
