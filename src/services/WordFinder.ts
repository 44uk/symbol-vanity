/*
 * MIT License
 *
 * Copyright (c) 2020 Decentraliser
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { Match } from '../model/Match'
import { WordsRepository } from '../repositories/WordsRepository'

const wordList = WordsRepository.getWordList()

export class WordFinder {
  public readonly wordList: string[]

  public static create(): WordFinder {
    return new WordFinder()
  }

  private constructor() {
    this.wordList = wordList
  }

  public getMatches(addresses: string[]): Match[] {
    return this.wordList
      .map((word) => {
        const matchedAddress = addresses.find((address) => address.toLowerCase().includes(word))
        if (!matchedAddress) return null
        return { address: matchedAddress, word }
      })
      .filter((x) => x) as Match[]
  }
}
