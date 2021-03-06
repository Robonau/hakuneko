/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/resolve-url.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.

/// <reference path="boot.d.ts" />

declare namespace Polymer {

  /**
   * Module with utilities for resolving relative URL's.
   */
  namespace ResolveUrl {


    /**
     * Resolves the given URL against the provided `baseUri'.
     *
     * Note that this function performs no resolution for URLs that start
     * with `/` (absolute URLs) or `#` (hash identifiers).  For general purpose
     * URL resolution, use `window.URL`.
     *
     * @returns resolved URL
     */
    function resolveUrl(url: string, baseURI?: string|null): string;


    /**
     * Resolves any relative URL's in the given CSS text against the provided
     * `ownerDocument`'s `baseURI`.
     *
     * @returns Processed CSS text with resolved URL's
     */
    function resolveCss(cssText: string, baseURI: string): string;


    /**
     * Returns a path from a given `url`. The path includes the trailing
     * `/` from the url.
     *
     * @returns resolved path
     */
    function pathFromUrl(url: string): string;
  }
}
