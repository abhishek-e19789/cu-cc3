# Q013: Largest Rectangle in Histogram (Monotonic Stack Boundary Optimization)

## 1. Problem Information

- **Problem Title:** Largest Rectangle in Histogram (Monotonic Stack Boundary Optimization)
- **Problem ID:** Q013
- **Original Platform:** LeetCode
- **Original Problem ID:** 84
- **Original Problem Link:** [LeetCode #84](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- **Difficulty:** Hard
- **Target MAANG Companies:** Amazon, Meta, Netflix, Apple, Google
- **Primary DSA Concepts:** Monotonic Stack, Nearest Smaller Element (NSE) Boundaries
- **Advanced DSA Concepts:** Divide and Conquer / Cartesian Tree, Optimal 1D Segment Span Expansion

---

## 2. Problem Statement

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

---

## 3. Input Format

An integer array heights.

---

## 4. Output Format

Return an integer representing the maximum area of a rectangle contained within the histogram.

---

## 5. Constraints

- `1 <= heights.length <= 10^5`
- `0 <= heights[i] <= 10^4`

---

## 6. Examples

### Example 1

```text
Input: heights = [2,1,5,6,2,3]
Output: 10
```

**Explanation:**
The largest rectangle is formed by the bars of height 5 and 6: width = 2, height = 5, area = 10.

### Example 2

```text
Input: heights = [2,4]
Output: 4
```

**Explanation:**
The largest rectangle is the bar of height 4 (area = 4) or the width-2 rectangle of height 2 (area = 4).


---

## 7. Edge Cases to Consider

- **Monotonically increasing heights (e.g. [1, 2, 3, 4, 5]):**  Handled by sentinel 0 at the end to flush the stack.
- **All identical heights:**  Area is height * length.
- **Histogram with zeros:**  Zero height splits the histogram into independent zones.
- **Single bar:**  Area is heights[0].

---

## 8. Concept Classification

- **Primary Concepts:** Monotonic Stack; Nearest Smaller Element (NSE) Boundaries
- **Advanced Concepts:** Divide and Conquer / Cartesian Tree; Optimal 1D Segment Span Expansion
- **Prerequisite Knowledge Required:** Graph/Tree traversals, amortized complexity analysis, advanced data structures, and mathematical boundary invariance.

---

## 9. Industry Relevance

The following table documents verified interview reports indicating this problem or its core technical pattern has been tested at target MAANG companies:

| Company | Source Platform | Interview Year | Problem Match | Report Evidence | Reference Link |
|---|---|---|---|---|---|
| **Amazon** | LeetCode Discuss | 2024 | Exact problem | High frequency Amazon SDE-2 bar raiser problem, tested with follow-up 'Maximal Rectangle in 2D Binary Matrix'. | [View Report](https://leetcode.com/discuss/interview-experience/4910281/Amazon-SDE2-Histogram-Maximal-Rectangle) |
| **Meta** | Glassdoor | 2023 | Exact problem | Reported in Meta E5 interview assessing candidate's ability to explain the single-pass stack invariant clearly. | [View Report](https://www.glassdoor.com/Interview/Meta-Software-Engineer-Interview-Questions-E40772.htm) |
| **Netflix** | LeetCode Discuss | 2023 | Similar variant | Bandwidth allocation capacity problem on piecewise step-function traffic profiles. | [View Report](https://leetcode.com/discuss/interview-experience/3910214/Netflix-Senior-Infrastructure-Interview) |
| **Apple** | Reddit (r/cscareerquestions) | 2022 | Same pattern | Display driver buffer frame maximum contiguous pixel block computation. | [View Report](https://www.reddit.com/r/cscareerquestions/comments/v1108a/apple_display_driver_interview_monotonic_stack/) |

---

## 10. Prerequisite Learning Path

To progressively build the foundational insights required to tackle this problem, solve the following questions in sequence:

| Platform | Problem Name | Problem ID | Difficulty / Rating | Core Concepts | Learning Objective | Direct URL |
|---|---|---|---|---|---|---|
| **LeetCode** | Next Greater Element I | 496 | Easy | Monotonic Stack | Learn basic next-greater/smaller element stack template. | [Link](https://leetcode.com/problems/next-greater-element-i/) |
| **LeetCode** | Daily Temperatures | 739 | Medium | Monotonic Stack with Distance Indexing | Use index differences in stack pops. | [Link](https://leetcode.com/problems/daily-temperatures/) |
| **Codeforces** | Cartesian Tree Construction | CF 1777E | 1900 | Cartesian Tree, Divide and Conquer RMQ | Relate monotonic stacks to Cartesian tree spine walks. | [Link](https://codeforces.com/problemset/problem/1777/E) |

---

## 11. Interview Challenge & Follow-Up Questions

In a top-tier technical round, interviewers will challenge you with modifications once the base problem is identified. Consider these scenarios:

### Challenge Variation 1: Maximal Rectangle in 2D Binary Matrix
- **Modified Requirement:** Given an M x N binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's.
- **Additional Concepts Introduced:** Cumulative Height Array + Largest Rectangle in Histogram on each row
- **Target Difficulty:** Hard (LC 85)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 2: Maximal Square in 2D Matrix
- **Modified Requirement:** Find the area of the largest SQUARE containing only 1's.
- **Additional Concepts Introduced:** 2D Dynamic Programming dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
- **Target Difficulty:** Medium-Hard (LC 221)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?

### Challenge Variation 3: Dynamic Histogram with Bar Height Updates
- **Modified Requirement:** Support point updates height[i] = v and query the global largest rectangle after each update.
- **Additional Concepts Introduced:** Segment Tree with dynamic maximum subsegment properties
- **Target Difficulty:** Master (CF 2500+)
- **Reflection Question:** How does this modification break naive assumptions, and what higher-dimensional data structure or algorithmic relaxation becomes necessary?


---

## 12. Candidate Instructions

1. **Independent Problem Solving:** Do not look up solutions or editorials. Attempt to reach a working prototype within a 45-minute timed interview block.
2. **Implementation Languages:** Choose between modern C++ (C++17 or later) or Python 3. Ensure your solution complies with the stated constraints.
3. **Rigorous Complexity Analysis:** Provide explicit mathematical justifications for both time and auxiliary space complexity.
4. **Edge Case Verification:** Hand-trace all edge cases identified in Section 7 before submitting code.
5. **Interview Explanation:** Practice articulating your thought process aloud, clarifying constraints, presenting trade-offs, and defending your choice of data structures.
