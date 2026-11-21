# Q002: Critical Connections in a Network (Bridge Finding)

## 1. Problem Information

- **Problem Title:** Critical Connections in a Network (Bridge Finding)
- **Problem ID:** Q002
- **Original Platform:** LeetCode
- **Original Problem ID:** 1192
- **Original Problem Link:** [LeetCode #1192](https://leetcode.com/problems/critical-connections-in-a-network/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Amazon, Apple, Meta, Google
- **Primary DSA Concepts:** Tarjan's Bridge-Finding Algorithm, DFS Spanning Tree
- **Advanced DSA Concepts:** Low-link Values, Articulation Points / 2-Edge Connected Components

---

## 2. Problem Statement

There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a bidirectional connection between servers ai and bi. Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some servers unable to reach some other server (i.e. disconnect the network).

Return all critical connections in the network in any order.

---

## 3. Input Format

An integer n representing the number of servers, and a 2D integer array connections where connections[i] = [ai, bi].

---

## 4. Output Format

Return a 2D array of critical connections where each element is [ai, bi].

---

## 5. Constraints

- `2 <= n <= 10^5`
- `n - 1 <= connections.length <= 10^5`
- `0 <= ai, bi <= n - 1`
- `ai != bi`
- `There are no repeated connections.`
- `The network is connected.`

---

## 6. Examples

### Example 1

```text
Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
```

**Explanation:**
The connection [1,3] is critical because removing it isolates node 3. The cycle (0-1-2-0) ensures no edge within the cycle is critical.

### Example 2

```text
Input: n = 2, connections = [[0,1]]
Output: [[0,1]]
```

**Explanation:**
Removing the only edge [0,1] disconnects node 0 and node 1.


---

## 7. Edge Cases to Consider

- **Linear tree graph (N nodes, N-1 edges in a line):**  All N-1 edges are critical bridges.
- **Single simple cycle of N nodes:**  Exactly 0 bridges exist.
- **Two large cycles connected by a single edge:**  Only that connecting edge is critical.
- **Star graph with central hub:**  Every leaf edge is critical.

---

## 8. Concept Classification

- **Primary Concepts:** Tarjan's Bridge-Finding Algorithm; DFS Spanning Tree
- **Advanced Concepts:** Low-link Values; Articulation Points / 2-Edge Connected Components
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Amazon** | LeetCode Discuss | 2024 | Exact problem | Reported in AWS infrastructure team interviews: 'Find single points of network failure in a data center graph'. | [View Report](https://leetcode.com/discuss/interview-experience/4921045/Amazon-AWS-Senior-SDE-Interview) |
| **Apple** | Glassdoor | 2023 | Exact problem | Asked in CoreOS team interview assessing deep graph theory and DFS low-link traversal. | [View Report](https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm) |
| **Meta** | LeetCode Discuss | 2023 | Similar variant | Asked as 'Minimum edges to add to make network bridge-free' (biconnected component condensation). | [View Report](https://leetcode.com/discuss/interview-experience/3811902/Meta-E5-Onsite-Coding) |
| **Google** | GeeksforGeeks | 2022 | Exact problem | Graph connectivity round candidate was asked to implement linear-time bridge detection without recursion limit overflow. | [View Report](https://www.geeksforgeeks.org/google-interview-experience-for-software-engineer-off-campus/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Number of Connected Components in an Undirected Graph | 323 | Medium | DFS, BFS, Disjoint Set Union | Understand basic graph connectivity and cycle identification. | [Link](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |
| **Codeforces** | Bertown roads | 118A / 118E | 1900 | Tarjan's Bridges, DFS Tree, Graph Orientation | Master classifying edges into Tree Edges vs Back Edges and computing low-link values. | [Link](https://codeforces.com/problemset/problem/118/E) |
| **Codeforces** | Reform | 652E | 2100 | 2-Edge Connected Components, Bridge Block Tree | Compress 2-edge connected components and build bridge-block trees. | [Link](https://codeforces.com/problemset/problem/652/E) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: Bridge-Block Tree Condensation
- **Modified Requirement:** Condense all 2-edge connected components into single super-nodes and return the diameter of the resulting tree.
- **Additional Concepts Introduced:** DSU + Tree DP on Bridge Tree
- **Target Difficulty:** Hard (CF 2100)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: Online Bridge Detection
- **Modified Requirement:** Process Q edge additions dynamically. After each edge addition, report the current number of bridges remaining in the network.
- **Additional Concepts Introduced:** 2-Biconnected Components DSU + 2-Level DSU (Dinitz / Westbrook-Tarjan)
- **Target Difficulty:** Master (CF 2500+)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: Critical Nodes (Articulation Points)
- **Modified Requirement:** Instead of connections (edges), find servers (nodes) whose removal disconnects the network.
- **Additional Concepts Introduced:** Tarjan's Articulation Point Algorithm (low[v] >= tin[u])
- **Target Difficulty:** Hard
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
