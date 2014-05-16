Three different plugins, all do the same thing: Detect common words in a given text.

You'll need to pass the `id`s of the source element and the results table.  Source element can be anything with a `value` property (though I'd suggest a `<textarea>`) and the results element should be formatted like so (I'll probably get less strict in future versions):

    <table>
      <th>
        <td>Word</td>
        <td>Uses</td>
      </th>
      <tbody id="commonality">
      </tbody>
    </table>

Examples are given assuming textarea with id of `source` and the above table structure:

###Vanilla

    <script src="/path/to/commonality.js"></script>
    <script>
      commonality('source', 'commonality');
    </script>

###jQuery

(jQuery version is almost identical to the vanilla, it's here for SEO)

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/path/to/jCommonality.js"></script>
    <script>
      $.commonality('source', 'commonality');
    </script>

###Angular

    <div commonality-source></div>
    <table>
      <thead>
        <tr>
          <td>Word</td>
          <td>Uses</td>
        </tr>
      </thead>
      <tbody id="commonality" commonality-results></tbody>
    </table>
    
Don't forget to require commonality in your JavaScript:

    angular.module('MyApp', [
      'commonality'  
    ])

Minified files are generated with UglifyJS2