# Golang 处理string使用到的算法

## 获取两个字符串的最长公共子串

```go
package main

import "fmt"

func LongestCommonSubstring(a, b string) string {
	m, n := len(a), len(b)
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	longest := 0
	start := 0

	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			if a[i-1] == b[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
				if dp[i][j] > longest {
					longest = dp[i][j]
					start = i - longest
				}
			}
		}
	}

	return a[start : start+longest]
}

func main() {
	fmt.Println(LongestCommonSubstring("hello world","hello"))
}

```