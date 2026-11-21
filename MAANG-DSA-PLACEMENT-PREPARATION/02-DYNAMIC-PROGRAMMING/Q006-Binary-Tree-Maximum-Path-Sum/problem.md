# Q006: Binary Tree Maximum Path Sum (Tree DP)

## 1. Problem Information

- **Problem Title:** Binary Tree Maximum Path Sum (Tree DP)
- **Problem ID:** Q006
- **Original Platform:** LeetCode
- **Original Problem ID:** 124
- **Original Problem Link:** [LeetCode #124](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Meta, Apple, Amazon, Google
- **Primary DSA Concepts:** Tree Dynamic Programming, Post-Order DFS Traversal
- **Advanced DSA Concepts:** Turning-Point Path Decomposition, Subtree Gain Invariant

---

## 2. Problem Statement

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

---

## 3. Input Format

The root of a binary tree where each node has integer val and pointers to left and right children.

---

## 4. Output Format

Return an integer representing the maximum path sum across all possible paths.

---

## 5. Constraints

- `The number of nodes in the tree is in the range [1, 3 * 10^4].`
- `-1000 <= Node.val <= 1000`

---

## 6. Examples

### Example 1

```text
Input: root = [1,2,3]
Output: 6
```

**Explanation:**
The optimal path is 2 -> 1 -> 3 with path sum 2 + 1 + 3 = 6.

### Example 2

```text
Input: root = [-10,9,20,null,null,15,7]
Output: 42
```

**Explanation:**
The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.


---

## 7. Edge Cases to Consider

- **All negative values (e.g. [-3, -2, -1]):**  Path cannot be empty; optimal path is the single maximum negative node (-1).
- **Single node tree:**  Maximum path sum is node.val.
- **Zig-zag skewed tree:**  Linear path finding without bifurcations.
- **Large tree with 30,000 nodes:**  Recursion stack must not overflow.

---

## 8. Concept Classification

- **Primary Concepts:** Tree Dynamic Programming; Post-Order DFS Traversal
- **Advanced Concepts:** Turning-Point Path Decomposition; Subtree Gain Invariant
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Meta** | LeetCode Discuss | 2024 | Exact problem | Historically ranked in the Top 5 most frequently asked Meta coding interview questions globally across all SWE levels. | [View Report](https://leetcode.com/discuss/interview-experience/4950182/Meta-E5-Senior-SWE-Full-Loop) |
| **Apple** | Glassdoor | 2023 | Exact problem | Asked in Apple AI/ML platform team interview evaluating candidate's tree DP recursion and state decomposition. | [View Report](https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm) |
| **Amazon** | LeetCode Discuss | 2024 | Exact problem | Asked in Amazon SDE-2 final round with follow-up on reconstructing the exact node sequence. | [View Report](https://leetcode.com/discuss/interview-experience/4691238/Amazon-SDE2-Onsite) |
| **Google** | GeeksforGeeks | 2023 | Similar variant | Extended to k-ary tree with edge weights instead of node weights. | [View Report](https://www.geeksforgeeks.org/google-interview-experience-set-223-software-engineering-intern/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Diameter of Binary Tree | 543 | Easy | Tree Traversal, Post-order DFS | Understand computing global maximum while returning single-branch height. | [Link](https://leetcode.com/problems/diameter-of-binary-tree/) |
| **LeetCode** | House Robber III | 337 | Medium | Tree DP, State Tuples | Return multiple subtree DP states (include/exclude) in tree traversal. | [Link](https://leetcode.com/problems/house-robber-iii/) |
| **Codeforces** | Tree Diameter | CSES 1131 / CF 1404B | 1600 | Tree DP, Two-DFS Diameter | Deconstruct longest paths on general trees. | [Link](https://codeforces.com/problemset/problem/1404/B) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: Path Reconstruction (Output Exact Node Path)
- **Modified Requirement:** Instead of merely returning the scalar sum, return the actual ordered list of node values forming the optimal path.
- **Additional Concepts Introduced:** Subtree path tracing / Backtracking pointers
- **Target Difficulty:** Hard
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: General N-ary Tree with Edge and Node Weights
- **Modified Requirement:** The tree is an N-ary tree where both nodes and edges have arbitrary integer weights.
- **Additional Concepts Introduced:** Top-2 maximum branch selection among children
- **Target Difficulty:** Hard (CF 1900)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: Dynamic Node Updates (Range/Point Updates)
- **Modified Requirement:** Process Q queries updating node values, outputting the tree's maximum path sum after each update.
- **Additional Concepts Introduced:** Heavy-Light Decomposition (HLD) / Dynamic Tree DP with Matrix Multiplication
- **Target Difficulty:** Master (CF 2500+)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
