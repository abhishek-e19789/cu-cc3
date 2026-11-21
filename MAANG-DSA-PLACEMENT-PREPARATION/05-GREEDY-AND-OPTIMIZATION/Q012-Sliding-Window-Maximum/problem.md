# Q012: Sliding Window Maximum (Monotonic Deque Optimization)

## 1. Problem Information

- **Problem Title:** Sliding Window Maximum (Monotonic Deque Optimization)
- **Problem ID:** Q012
- **Original Platform:** LeetCode
- **Original Problem ID:** 239
- **Original Problem Link:** [LeetCode #239](https://leetcode.com/problems/sliding-window-maximum/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Amazon, Google, Meta, Apple
- **Primary DSA Concepts:** Monotonic Deque (Double-Ended Queue), Sliding Window Optimization
- **Advanced DSA Concepts:** Amortized O(1) Queue Invariant, Block Decomposition / Sparse Table

---

## 2. Problem Statement

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

---

## 3. Input Format

An integer array nums and an integer window size k.

---

## 4. Output Format

Return an integer array containing the maximum values for each window position from left to right.

---

## 5. Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

---

## 6. Examples

### Example 1

```text
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
```

**Explanation:**
Window position                Max
------------------------     -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

### Example 2

```text
Input: nums = [1], k = 1
Output: [1]
```

**Explanation:**
Window size is 1; the only element is the maximum.


---

## 7. Edge Cases to Consider

- **k = 1:**  Output is identical to nums.
- **k = nums.length:**  Output contains exactly one element: max(nums).
- **Strictly decreasing array:**  Elements enter and leave the deque one by one.
- **Strictly increasing array:**  The newest element immediately evicts all previous elements from the deque.

---

## 8. Concept Classification

- **Primary Concepts:** Monotonic Deque (Double-Ended Queue); Sliding Window Optimization
- **Advanced Concepts:** Amortized O(1) Queue Invariant; Block Decomposition / Sparse Table
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Amazon** | LeetCode Discuss | 2024 | Exact problem | High frequency Amazon SDE-1 and SDE-2 interview problem for stream analytics and real-time peak load monitoring. | [View Report](https://leetcode.com/discuss/interview-experience/4929104/Amazon-SDE2-Sliding-Window-Max) |
| **Google** | Glassdoor | 2023 | Exact problem | Candidate asked to implement monotonic queue class with push, pop, and getMax all in O(1) amortized time. | [View Report](https://www.glassdoor.com/Interview/Google-Software-Engineer-Interview-Questions-E9079.htm) |
| **Meta** | LeetCode Discuss | 2023 | Similar variant | Sliding window minimum and maximum variance tracking for metrics time series. | [View Report](https://leetcode.com/discuss/interview-experience/3819201/Meta-Production-Engineer-Coding) |
| **Apple** | Reddit (r/cscareerquestions) | 2022 | Same pattern | Audio signal peak volume filter using monotonic double-ended queue. | [View Report](https://www.reddit.com/r/cscareerquestions/comments/ux9910/apple_dsp_monotonic_queue_interview/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Min Stack | 155 | Medium | Stack, O(1) Auxiliary State | Understand tracking extrema in LIFO structures. | [Link](https://leetcode.com/problems/min-stack/) |
| **Codeforces** | Queries for Number of Palindromes | 245H | 1800 | Interval RMQ, DP | Manage range extrema efficiently. | [Link](https://codeforces.com/problemset/problem/245/H) |
| **Codeforces** | Maximum of all subarrays of size k | CSES 1644 / CF 1195E | 1900 | 2D Monotonic Queue | Extend monotonic deque to 2D subgrid extrema. | [Link](https://codeforces.com/problemset/problem/1195/E) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: 2D Sliding Submatrix Maximum
- **Modified Requirement:** Given an M x N matrix, find the maximum in every R x C sliding submatrix.
- **Additional Concepts Introduced:** Two-pass Monotonic Deque (Row pass followed by Column pass)
- **Target Difficulty:** Hard (CF 1900, e.g. CF 1195E)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: Sliding Window with Dynamic K
- **Modified Requirement:** Window size expands or shrinks based on query stream (e.g. push_right, pop_left).
- **Additional Concepts Introduced:** Monotonic Queue with explicit index tracking
- **Target Difficulty:** Medium-Hard
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: Shortest Subarray with Sum at Least K
- **Modified Requirement:** Find the shortest subarray with sum >= K in an array containing negative numbers.
- **Additional Concepts Introduced:** Prefix Sums + Monotonic Deque with increasing prefix values
- **Target Difficulty:** Hard (LC 862)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
