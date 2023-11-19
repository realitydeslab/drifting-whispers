// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";
import { Tasks, TasksData, Players, PlayersData } from "../codegen/index.sol";

contract TasksSystem is System {
  function addTask(string memory description) public returns (bytes32 key) {
    key = keccak256(abi.encode(block.prevrandao, _msgSender(), description));
    Tasks.set(key, TasksData({ description: description, createdAt: block.timestamp, completedAt: 0 }));
  }

  function completeTask(bytes32 key) public {
    Tasks.setCompletedAt(key, block.timestamp);
  }

  function resetTask(bytes32 key) public {
    Tasks.setCompletedAt(key, 0);
  }

  function deleteTask(bytes32 key) public {
    Tasks.deleteRecord(key);
  }

  function addPlayer(address player, uint x, uint y) public {
    bytes32 key = keccak256(abi.encode(player));
    Players.set(key, x, y, 1);
  }

  function getPlayer(address player) public view returns (PlayersData memory playerdata) {
    bytes32 key = keccak256(abi.encode(player));
    return Players.get(key);
  }

  function capturePlayer(address player) public {
    bytes32 key = keccak256(abi.encode(player));
    Players.setStatus(key, 2);
  }

  function uncapturePlayer(address player) public {
    bytes32 key = keccak256(abi.encode(player));
    Players.setStatus(key, 1);
  }

  function movePlayer(address player, uint dx, uint dy) public {
    bytes32 key = keccak256(abi.encode(player));
    if (Players.getStatus(key) == 1) {
      Players.set(key, PlayersData({ x: dx, y: dy, status: 1 }));
    }
  }
}
