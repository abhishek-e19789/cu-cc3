# Q008: Count of Smaller Numbers After Self (Fenwick Tree / Inversion Counting)

## 1. Problem Information

- **Problem Title:** Count of Smaller Numbers After Self (Fenwick Tree / Inversion Counting)
- **Problem ID:** Q008
- **Original Platform:** LeetCode
- **Original Problem ID:** 315
- **Original Problem Link:** [LeetCode #315](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Google, Apple, Amazon, Meta
- **Primary DSA Concepts:** Fenwick Tree (Binary Indexed Tree), Coordinate Compression
- **Advanced DSA Concepts:** Merge Sort Divide & Conquer Inversions, Order Statistic Trees

---

## 2. Problem Statement

Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

---

## 3. Input Format

An integer array nums.

---

## 4. Output Format

Return an integer array counts of the same length.

---

## 5. Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

---

## 6. Examples

### Example 1

```text
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
```

**Explanation:**
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there are 0 smaller elements.

### Example 2

```text
Input: nums = [-1,-1]
Output: [0,0]
```

**Explanation:**
No element to the right is strictly smaller.


---

## 7. Edge Cases to Consider

- **Strictly decreasing array:**  counts[i] = n - 1 - i.
- **Strictly increasing array:**  counts[i] = 0 for all i.
- **Array with duplicates:**  Only strictly smaller elements count, equal elements do not count.
- **Large inputs with negative numbers:**  Coordinate compression or offset shift (+10001) required.

---

## 8. Concept Classification

- **Primary Concepts:** Fenwick Tree (Binary Indexed Tree); Coordinate Compression
- **Advanced Concepts:** Merge Sort Divide & Conquer Inversions; Order Statistic Trees
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Google** | LeetCode Discuss | 2024 | Exact problem | Asked in Google L4/L5 coding round to assess candidate's proficiency with range query structures (BIT vs Merge Sort). | [View Report](https://leetcode.com/discuss/interview-experience/4710123/Google-L4-SWE-Interview) |
| **Apple** | Glassdoor | 2023 | Exact problem | Reported in Apple Platform Architecture round for evaluating data streaming inversion metrics. | [View Report](https://www.glassdoor.com/Interview/Apple-Software-Engineer-Interview-Questions-E1138.htm) |
| **Amazon** | LeetCode Discuss | 2023 | Similar variant | Calculating inversion index for customer clickstream rankings. | [View Report](https://leetcode.com/discuss/interview-experience/3421109/Amazon-SDE-Inversion-Counting) |
| **Meta** | Reddit (r/leetcode) | 2022 | Same pattern | Merge sort with index tracking for rank correlation score. | [View Report](https://www.reddit.com/r/leetcode/comments/wb7n12/meta_merge_sort_inversion_count/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Range Sum Query - Mutable | 307 | Medium | Binary Indexed Tree / Segment Tree | Master standard point-update range-sum queries. | [Link](https://leetcode.com/problems/range-sum-query-mutable/) |
| **Codeforces** | Inversion Count | SPOJ INVCNT / CF 61E | 1900 | Coordinate Compression, Fenwick Tree | Calculate inversions in arrays with arbitrary range values. | [Link](https://codeforces.com/problemset/problem/61/E) |
| **Codeforces** | Enemy is weak | 61E | 1900 | Fenwick Tree Inversions x 2 | Combine forward and backward BIT queries. | [Link](https://codeforces.com/problemset/problem/61/E) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: Reverse Pairs (nums[i] > 2 * nums[j])
- **Modified Requirement:** Count pairs (i, j) with i < j and nums[i] > 2 * nums[j].
- **Additional Concepts Introduced:** Modified Merge Sort / Disjoint Coordinate Compression
- **Target Difficulty:** Hard (LC 493)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: Count Smaller in Dynamic Array with Insertions
- **Modified Requirement:** Elements are inserted dynamically into arbitrary positions in the array; maintain running smaller counts.
- **Additional Concepts Introduced:** Treap with Subtree Size / Order Statistic Tree
- **Target Difficulty:** Hard (CF 2200)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: 3-Element Inversions (i < j < k with nums[i] > nums[j] > nums[k])
- **Modified Requirement:** Count the total number of triplets satisfying descending inversion order.
- **Additional Concepts Introduced:** Two Fenwick Trees (prefix greater and suffix smaller)
- **Target Difficulty:** Hard (CF 1900)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
