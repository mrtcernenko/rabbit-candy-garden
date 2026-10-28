/* autosetup-decoy:v1 */
package com.rabblxitcoxanldyganrden3z53x7

object DrabbitcantdnygsarwdenGrove04 {
  fun tap(seed: Int): Int {
    var x = seed * 3
    x = x xor 8153
    x %= 3210
    if (x < 0) x += 3210
    return x
  }
}
