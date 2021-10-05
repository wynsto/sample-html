---
title: "JavaScript Objects"
date: "2021-07-24"
tag: ['algo']
---

[JavaScript Object](https://github.com/v8/v8/blob/master/src/objects/objects.h)

//
// Most object types in the V8 JavaScript are described in this file.
//
// Inheritance hierarchy:
// - Object
//   - Smi          (immediate small integer)
//   - TaggedIndex  (properly sign-extended immediate small integer)
//   - HeapObject   (superclass for everything allocated in the heap)
//     - JSReceiver  (suitable for property access)
//       - JSObject
//         - JSArray
//         - JSArrayBuffer
//         - JSArrayBufferView
//           - JSTypedArray
//           - JSDataView
//         - JSCollection
//           - JSSet
//           - JSMap
//         - JSCustomElementsObject (may have elements despite empty FixedArray)
//           - JSSpecialObject (requires custom property lookup handling)
//             - JSGlobalObject
//             - JSGlobalProxy
//             - JSModuleNamespace
//           - JSPrimitiveWrapper
//         - JSDate
//         - JSFunctionOrBoundFunction
//           - JSBoundFunction
//           - JSFunction
//         - JSGeneratorObject
//         - JSMapIterator
//         - JSMessageObject
//         - JSRegExp
//         - JSSetIterator
//         - JSStringIterator
//         - JSWeakCollection
//           - JSWeakMap
//           - JSWeakSet
//         - JSCollator            // If V8_INTL_SUPPORT enabled.
//         - JSDateTimeFormat      // If V8_INTL_SUPPORT enabled.
//         - JSDisplayNames        // If V8_INTL_SUPPORT enabled.
//         - JSListFormat          // If V8_INTL_SUPPORT enabled.
//         - JSLocale              // If V8_INTL_SUPPORT enabled.
//         - JSNumberFormat        // If V8_INTL_SUPPORT enabled.
//         - JSPluralRules         // If V8_INTL_SUPPORT enabled.
//         - JSRelativeTimeFormat  // If V8_INTL_SUPPORT enabled.
//         - JSSegmenter           // If V8_INTL_SUPPORT enabled.
//         - JSSegments            // If V8_INTL_SUPPORT enabled.
//         - JSSegmentIterator     // If V8_INTL_SUPPORT enabled.
//         - JSV8BreakIterator     // If V8_INTL_SUPPORT enabled.
//         - WasmTagObject
//         - WasmGlobalObject
//         - WasmInstanceObject
//         - WasmMemoryObject
//         - WasmModuleObject
//         - WasmTableObject
//       - JSProxy
//     - FixedArrayBase
//       - ByteArray
//       - BytecodeArray
//       - FixedArray
//         - HashTable
//           - Dictionary
//           - StringTable
//           - StringSet
//           - CompilationCacheTable
//           - MapCache
//         - OrderedHashTable
//           - OrderedHashSet
//           - OrderedHashMap
//         - FeedbackMetadata
//         - TemplateList
//         - TransitionArray
//         - ScopeInfo
//         - SourceTextModuleInfo
//         - ScriptContextTable
//         - ClosureFeedbackCellArray
//       - FixedDoubleArray
//     - PrimitiveHeapObject
//       - BigInt
//       - HeapNumber
//       - Name
//         - String
//           - SeqString
//             - SeqOneByteString
//             - SeqTwoByteString
//           - SlicedString
//           - ConsString
//           - ThinString
//           - ExternalString
//             - ExternalOneByteString
//             - ExternalTwoByteString
//           - InternalizedString
//             - SeqInternalizedString
//               - SeqOneByteInternalizedString
//               - SeqTwoByteInternalizedString
//             - ConsInternalizedString
//             - ExternalInternalizedString
//               - ExternalOneByteInternalizedString
//               - ExternalTwoByteInternalizedString
//         - Symbol
//       - Oddball
//     - Context
//       - NativeContext
//     - Cell
//     - DescriptorArray
//     - PropertyCell
//     - PropertyArray
//     - Code
//     - AbstractCode, a wrapper around Code or BytecodeArray
//     - Map
//     - Foreign
//     - SmallOrderedHashTable
//       - SmallOrderedHashMap
//       - SmallOrderedHashSet
//     - SharedFunctionInfo
//     - Struct
//       - AccessorInfo
//       - AsmWasmData
//       - PromiseReaction
//       - PromiseCapability
//       - AccessorPair
//       - AccessCheckInfo
//       - InterceptorInfo
//       - CallHandlerInfo
//       - EnumCache
//       - TemplateInfo
//         - FunctionTemplateInfo
//         - ObjectTemplateInfo
//       - Script
//       - DebugInfo
//       - BreakPoint
//       - BreakPointInfo
//       - CachedTemplateObject
//       - StackFrameInfo
//       - CodeCache
//       - PropertyDescriptorObject
//       - PrototypeInfo
//       - Microtask
//         - CallbackTask
//         - CallableTask
//         - PromiseReactionJobTask
//           - PromiseFulfillReactionJobTask
//           - PromiseRejectReactionJobTask
//         - PromiseResolveThenableJobTask
//       - Module
//         - SourceTextModule
//         - SyntheticModule
//       - SourceTextModuleInfoEntry
//     - FeedbackCell
//     - FeedbackVector
//     - PreparseData
//     - UncompiledData
//       - UncompiledDataWithoutPreparseData
//       - UncompiledDataWithPreparseData
//     - SwissNameDictionary
//
// Formats of Object::ptr_:
//  Smi:        [31 bit signed int] 0
//  HeapObject: [32 bit direct pointer] (4 byte aligned) | 01