export const tpch22 = `const %0[134] ="|\\000\\000\\000\\000\\000\\000\\000J\\000\\000\\000@\\000\\000\\000^\\000\\000\\000T\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000h\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\002\\000\\000\\00013\\000\\000\\000\\000\\002\\000\\000\\00017\\000\\000\\000\\000\\002\\000\\000\\00018\\000\\000\\000\\000\\002\\000\\000\\00023\\000\\000\\000\\000\\002\\000\\000\\00029\\000\\000\\000\\000\\002\\000\\000\\00030r\\000\\000\\000\\002\\000\\000\\00031"

const %1894[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %2240[72] ="\\005\\000\\000\\000\\011\\000\\000\\000\\000\\002\\000\\014\\000\\000\\000\\006\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\032V\\000\\000\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %2350[8] ="\\004\\000\\000\\000\\005\\000\\000\\000"

const %14776[0] =""

const %14815[12] ="\\000\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000"

const %19973[4] ="\\001\\000\\000\\000"

const %33388[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %35594[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_0, i64 17)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 216
  %GroupByTranslator_cpp_269_ = call ptr _ZN5umbra17AggregationTarget19createExplicitGroupEm (%CompilationContext_cpp_214_1, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_269_, i64 16
  store int64 i64 0, %GroupByTranslator_cpp_269_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_269_, i64 8
  store int64 i64 0, %MaterializationHelper_cpp_983_
  store int8 i8 1, %MaterializationHelper_cpp_726_
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 24816
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 24912
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 25008
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_4, i32 1)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 25056
  call void _ZN5umbra12TempOperator4initEPS0_ (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 25080
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_6, i64 32)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 49672
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_8, %state, global %1894)
  return 1
}

define int32 @_9_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_230_0 = load data128 %right
  %Text_cpp_109_ = call i32 _ZN5umbra11TextRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_0)
  return %Text_cpp_109_
}

declare int32 @_ZN5umbra11TextRuntime7compareENS_9data128_tES1_(data128 %525, data128 %539)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %673)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %794, int64 %808)

declare int8* @_ZN5umbra17AggregationTarget19createExplicitGroupEm(object umbra::AggregationTarget* %993, int64 %1007)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %1589, int32 %1603)

declare void @_ZN5umbra12TempOperator4initEPS0_(object umbra::TempOperator* %1714)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %2028, int8* %2042, int8* %2056)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 3, global %2240, i64 1, global %2350, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %2477, int8* %2491, int64 %2505, object umbra::Relation::RestrictionInfo* %2519, int64 %2533, int32* %2547, int32 %2561)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2647, int32 %2661, int32 %2675, int32 %2689, int32 %2703)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 17)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %2871, int64 %2885)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %3041)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %3173, int32 %3187)

define int32 @_9_groupby_tablescan_customer(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 96
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_, %localTid
  %Numeric_cpp_278_ = cmpsle i64 1, %RelationMappedLogic_cpp_309_
  condbr %Numeric_cpp_278_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_6, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_7 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_8 = add i64 %RelationMappedLogic_cpp_320_7, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_9 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_8, %RelationMappedLogic_cpp_320_7
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_9
  %Text_cpp_459_ = call d128 _ZN5umbra11TextRuntime9substringENS_9data128_tEii (%RelationMappedLogic_cpp_324_, i32 1, i32 2)
  %ConsumerContext_cpp_324_ = call d128 _ZN5umbra11TextRuntime22makeTemporaryTransientENS_9data128_tE (%Text_cpp_459_)
  %InExpressionTranslator_cpp_109_ = extractdata128 i64 %ConsumerContext_cpp_324_
  %InExpressionTranslator_cpp_109_10 = trunc i32 %InExpressionTranslator_cpp_109_
  %InExpressionTranslator_cpp_110_ = cmpult i32 2, %InExpressionTranslator_cpp_109_10
  %InExpressionTranslator_cpp_110_11 = cmpult i32 %InExpressionTranslator_cpp_109_10, 2
  %InExpressionTranslator_cpp_110_12 = or bool %InExpressionTranslator_cpp_110_11, %InExpressionTranslator_cpp_110_
  condbr %InExpressionTranslator_cpp_110_12 %notFound %else

else:
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%ConsumerContext_cpp_324_, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 60
  %InExpressionTranslator_cpp_145_13 = load int32 global %0, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_13, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_13, %else %InExpressionTranslator_cpp_164_, %cont]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %0, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Text_cpp_95_ = call bool _ZN5umbra11TextRuntime9compareEqENS_9data128_tES1_ (%ConsumerContext_cpp_324_, %MaterializationHelper_cpp_620_)
  %ConsumerContext_cpp_417_ = not bool %Text_cpp_95_
  condbr %ConsumerContext_cpp_417_ %cont %else15

else15:
  br %in

cont:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else15]
  call void _ZN5umbra11TextRuntime13freeTransientENS_9data128_tE (%ConsumerContext_cpp_324_)
  condbr %InExpressionTranslator_cpp_182_ %then16 %contScan

then16:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, i64 4
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 0, i32 0
  %PreaggregationLogic_cpp_25_17 = cmpne i64 %PreaggregationLogic_cpp_25_, 3749646514382295044
  condbr %PreaggregationLogic_cpp_25_17 %then18 %else19

then18:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store int64 %RelationMappedLogic_cpp_309_, %PreaggregationLogic_cpp_29_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 8
  store int64 i64 1, %MaterializationHelper_cpp_983_
  store int8 i8 0, %MaterializationHelper_cpp_726_
  br %cont29

else19:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 1
  %MaterializationHelper_cpp_726_20 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_20
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_21 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_21 %then22 %else23

then22:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  store int64 %RelationMappedLogic_cpp_309_, %PreaggregationLogic_cpp_36_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_20
  br %cont25

else23:
  %MaterializationHelper_cpp_977_ = load int64 %PreaggregationLogic_cpp_36_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %RelationMappedLogic_cpp_309_ %cont24 %overflow

cont24:
  store int64 %Numeric_cpp_777_, %PreaggregationLogic_cpp_36_
  br %cont25

cont25:
  %MaterializationHelper_cpp_977_26 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  %MaterializationHelper_cpp_977_27 = load int64 %MaterializationHelper_cpp_977_26
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_27, 1
  %MaterializationHelper_cpp_983_28 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  store int64 %Aggregate_cpp_166_, %MaterializationHelper_cpp_983_28
  br %cont29

cont29:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare data128 @_ZN5umbra11TextRuntime9substringENS_9data128_tEii(data128 %4989, int32 %5003, int32 %5017)

declare data128 @_ZN5umbra11TextRuntime22makeTemporaryTransientENS_9data128_tE(data128 %5071)

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %5375, int64 %5389)

declare data128 @_ZN5umbra11TextRuntime17deserializeStringEPKhj(int8* %5903, int32 %5917)

declare bool @_ZN5umbra11TextRuntime9compareEqENS_9data128_tES1_(data128 %6067, data128 %6081)

declare void @_ZN5umbra11TextRuntime13freeTransientENS_9data128_tE(data128 %6392)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %6720, int64 %6734)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %8050)

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %8132, int8* %8146, int64 %8160)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %8251, int8* %8265)

define int32 @_9_groupby_tablescan_customer_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 16
  %GroupByTranslator_cpp_121_2 = getelementptr int8 %chainEntry, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_3 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  %MaterializationHelper_cpp_726_4 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 16
  %MaterializationHelper_cpp_727_5 = load int8 %MaterializationHelper_cpp_726_4
  %MaterializationHelper_cpp_780_6 = and i8 %MaterializationHelper_cpp_727_5, 1
  %MaterializationHelper_cpp_780_7 = cmpne i8 %MaterializationHelper_cpp_780_6, 0
  condbr %MaterializationHelper_cpp_780_7 %then8 %else

then8:
  br %cont14

else:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  condbr %MaterializationHelper_cpp_780_3 %then9 %else10

then9:
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_
  store int64 %MaterializationHelper_cpp_977_, %GroupByTranslator_cpp_121_2
  br %cont13

else10:
  %MaterializationHelper_cpp_977_11 = load int64 %GroupByTranslator_cpp_121_2
  %MaterializationHelper_cpp_977_12 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_12 %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_121_2
  br %cont13

cont13:
  br %cont14

cont14:
  %10201 = phi i8 [%MaterializationHelper_cpp_727_, %then8 %MaterializationHelper_cpp_752_, %cont13]
  %MaterializationHelper_cpp_977_15 = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 8
  %MaterializationHelper_cpp_977_16 = load int64 %MaterializationHelper_cpp_977_15
  %MaterializationHelper_cpp_977_17 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 8
  %MaterializationHelper_cpp_977_18 = load int64 %MaterializationHelper_cpp_977_17
  %Aggregate_cpp_175_ = add i64 %MaterializationHelper_cpp_977_16, %MaterializationHelper_cpp_977_18
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 8
  store int64 %Aggregate_cpp_175_, %MaterializationHelper_cpp_983_
  store int8 %10201, %MaterializationHelper_cpp_726_
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_19 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_19, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 33
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 8

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %8601)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 56, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %11251)

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %11383, int8* %11397)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12TempOperator4initEPS0_ (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12TempOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12TempOperator7destroyEPS0_(object umbra::TempOperator* %11755)

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %cont14]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_1 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_1 %then %else

then:
  br %cont

else:
  %MaterializationHelper_cpp_977_ = load int64 %PreaggregationLogic_cpp_140_
  br %cont

cont:
  %12658 = phi i64 [i64 0, %then %MaterializationHelper_cpp_977_, %else]
  %MaterializationHelper_cpp_876_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 8
  %MaterializationHelper_cpp_876_2 = load int64 %MaterializationHelper_cpp_876_
  condbr %MaterializationHelper_cpp_780_1 %then3 %else4

then3:
  br %cont8

else4:
  %BigNumeric_cpp_863_ = ashr i64 %12658, 63
  %BigNumeric_cpp_863_5 = builddata128 d128 %12658 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_6 = ashr i64 %MaterializationHelper_cpp_876_2, 63
  %BigNumeric_cpp_863_7 = builddata128 d128 %MaterializationHelper_cpp_876_2 %BigNumeric_cpp_863_6
  %Numeric_cpp_627_ = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_5, %BigNumeric_cpp_863_7, i32 19)
  br %cont8

cont8:
  %13095 = phi d128 [d128 {0,0}, %then3 %Numeric_cpp_627_, %else4]
  %MaterializationHelper_cpp_137_ = not bool %MaterializationHelper_cpp_780_1
  %MaterializationHelper_cpp_137_9 = SExt i64 %MaterializationHelper_cpp_137_
  %MaterializationHelper_cpp_137_10 = and i64 %MaterializationHelper_cpp_137_9, 16
  %MaterializationHelper_cpp_137_11 = add i64 1, %MaterializationHelper_cpp_137_10
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %BNLJoinTranslator_cpp_394_ = call ptr _ZN5umbra12TempOperator10storeTupleEm (%Pipeline_cpp_276_, %MaterializationHelper_cpp_137_11)
  %MaterializationHelper_cpp_167_ = getelementptr int8 %BNLJoinTranslator_cpp_394_, i64 1
  condbr %MaterializationHelper_cpp_780_1 %then12 %else13

then12:
  store int8 i8 1, %BNLJoinTranslator_cpp_394_
  br %cont14

else13:
  store int8 i8 0, %BNLJoinTranslator_cpp_394_
  store data128 %13095, %MaterializationHelper_cpp_167_
  br %cont14

cont14:
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 12
}

declare data128 @_ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j(data128 %13000, data128 %13014, int32 %13028)

declare int8* @_ZN5umbra12TempOperator10storeTupleEm(object umbra::TempOperator* %13338, int64 %13352)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_64_ = load object umbra::GlobalStateHeader %state, i32 0, i32 2
  %Pipeline_cpp_66_ = load object umbra::LocalStateHeader %Pipeline_cpp_64_, i32 0, i32 2
  %Pipeline_cpp_67_ = load object umbra::LocalStateHeader %Pipeline_cpp_64_, i32 0, i32 0
  %Pipeline_cpp_68_ = getelementptr int8 %Pipeline_cpp_64_, i64 64
  %Pipeline_cpp_55_ = cmpult i32 0, %Pipeline_cpp_66_
  condbr %Pipeline_cpp_55_ %loopStates %loopDoneStates

loopStates:
  %Thread = phi i32 [i32 0, %body %Pipeline_cpp_96_, %continue]
  %Pipeline_cpp_75_ = zext i64 %Thread
  %Pipeline_cpp_75_0 = mul i64 %Pipeline_cpp_75_, %Pipeline_cpp_67_
  %Pipeline_cpp_75_1 = getelementptr int8 %Pipeline_cpp_68_, %Pipeline_cpp_75_0
  %Pipeline_cpp_78_ = load int8 %Pipeline_cpp_75_1, i32 -1
  %Pipeline_cpp_78_2 = cmpeq i8 %Pipeline_cpp_78_, 0
  condbr %Pipeline_cpp_78_2 %continue %else

else:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25056
  %Pipeline_cpp_276_ = getelementptr int8 %Pipeline_cpp_75_1, i64 32
  call void _ZN5umbra12TempOperator9mergeIntoERS0_ (%Pipeline_cpp_276_, %CompilationContext_cpp_214_)
  br %continue

continue:
  %Pipeline_cpp_96_ = add i32 %Thread, 1
  %Pipeline_cpp_97_ = cmpult i32 %Pipeline_cpp_96_, %Pipeline_cpp_66_
  condbr %Pipeline_cpp_97_ %loopStates %loopDoneStates

loopDoneStates:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_3 = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 24816
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_3, %CompilationContext_cpp_214_4, i64 3, global %14776, i64 0, global %14815, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 14, i32 15, i32 16)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 17)
  return 18
}

declare void @_ZN5umbra12TempOperator9mergeIntoERS0_(object umbra::TempOperator* %14567, object umbra::TempOperator* %14581)

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %15126)

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %15278)

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_tablescan_customer(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 96
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Text_cpp_459_ = call d128 _ZN5umbra11TextRuntime9substringENS_9data128_tEii (%RelationMappedLogic_cpp_324_, i32 1, i32 2)
  %ConsumerContext_cpp_324_ = call d128 _ZN5umbra11TextRuntime22makeTemporaryTransientENS_9data128_tE (%Text_cpp_459_)
  %InExpressionTranslator_cpp_109_ = extractdata128 i64 %ConsumerContext_cpp_324_
  %InExpressionTranslator_cpp_109_9 = trunc i32 %InExpressionTranslator_cpp_109_
  %InExpressionTranslator_cpp_110_ = cmpult i32 2, %InExpressionTranslator_cpp_109_9
  %InExpressionTranslator_cpp_110_10 = cmpult i32 %InExpressionTranslator_cpp_109_9, 2
  %InExpressionTranslator_cpp_110_11 = or bool %InExpressionTranslator_cpp_110_10, %InExpressionTranslator_cpp_110_
  condbr %InExpressionTranslator_cpp_110_11 %notFound %else

else:
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%ConsumerContext_cpp_324_, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 60
  %InExpressionTranslator_cpp_145_12 = load int32 global %0, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_12, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_12, %else %InExpressionTranslator_cpp_164_, %cont]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %0, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Text_cpp_95_ = call bool _ZN5umbra11TextRuntime9compareEqENS_9data128_tES1_ (%ConsumerContext_cpp_324_, %MaterializationHelper_cpp_620_)
  %ConsumerContext_cpp_417_ = not bool %Text_cpp_95_
  condbr %ConsumerContext_cpp_417_ %cont %else14

else14:
  br %in

cont:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else14]
  call void _ZN5umbra11TextRuntime13freeTransientENS_9data128_tE (%ConsumerContext_cpp_324_)
  condbr %InExpressionTranslator_cpp_182_ %then %contScan

then:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_15 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_15, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_16 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_17 = mul i64 %Hash_cpp_380_16, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_17, i64 29)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_18 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 24
  store int8 i8 0, %MaterializationHelper_cpp_161_18
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 17
}

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %18648, int64 %18662, int64 %18676)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %18822, data128 %18836)

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25008
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 20)
  return 19
}

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %19417, int8* %19431, int32 %19445)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %19485, int32 %19499)

define int32 @_9_join_tablescan_customer_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25008
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 20
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %19733, object umbra::ChainingHashTable::Collector* %19747)

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24912
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %14776, i64 0, global %19973, i32 1)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 21, i32 22, i32 23)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 25
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %19873)

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 32)
  return 0
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_map_join_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 76
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25008
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_233_10 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 24
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %HashJoinTranslator_cpp_433_ = load int8 %MaterializationHelper_cpp_233_10
  %HashJoinTranslator_cpp_433_11 = cmpeq i8 %HashJoinTranslator_cpp_433_, 0
  condbr %HashJoinTranslator_cpp_433_11 %then %cont

then:
  store int8 i8 2, %MaterializationHelper_cpp_233_10
  br %cont

cont:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_12 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_12 %cancellation %continueProbe

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 24

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %22023, int64 %22037)

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %23049, int8* %23063)

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25008
  call void _ZN5umbra17ChainingHashTable7ScanJob4initEPvS2_ (%CompilationContext_cpp_220_0, %CompilationContext_cpp_214_)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 27)
  return 26
}

declare void @_ZN5umbra17ChainingHashTable7ScanJob4initEPvS2_(int8* %23625, int8* %23639)

define int32 @_9_groupby_map_join_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %ChainingHashTableLogic_cpp_160_ = load object umbra::ChainingHashTable::ScanMorsel %localState, i32 0, i32 0
  %ChainingHashTableLogic_cpp_160_0 = load object umbra::ChainingHashTable::ScanMorsel %localState, i32 0, i32 1
  %ChainingHashTableLogic_cpp_161_ = cmpne ptr %ChainingHashTableLogic_cpp_160_, %ChainingHashTableLogic_cpp_160_0
  condbr %ChainingHashTableLogic_cpp_161_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%ChainingHashTableLogic_cpp_160_, %body %ChainingHashTableLogic_cpp_185_, %loopDoneEntries]
  %ChainingHashTableLogic_cpp_164_ = load int64 %slot
  %ChainingHashTableLogic_cpp_166_ = lshr i64 %ChainingHashTableLogic_cpp_164_, 16
  %ChainingHashTableLogic_cpp_167_ = inttoptr ptr %ChainingHashTableLogic_cpp_166_
  %ChainingHashTableLogic_cpp_168_ = isnotnull ptr %ChainingHashTableLogic_cpp_167_
  condbr %ChainingHashTableLogic_cpp_168_ %loopEntries %loopDoneEntries

loopEntries:
  %entry = phi ptr [%ChainingHashTableLogic_cpp_167_, %loopSlots %ChainingHashTableLogic_cpp_181_30, %continue]
  %ChainingHashTableLogic_cpp_174_ = getelementptr int8 %entry, i64 16
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_174_, i64 4
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_2 = load int64 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_3 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 24
  %HashJoinTranslator_cpp_274_ = load int8 %MaterializationHelper_cpp_233_3
  %HashJoinTranslator_cpp_301_ = cmpeq i8 %HashJoinTranslator_cpp_274_, 0
  condbr %HashJoinTranslator_cpp_301_ %then %cont29

then:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25056
  %BNLJoinTranslator_cpp_431_ = getelementptr object umbra::TempOperator %CompilationContext_cpp_214_, i32 0, i32 0
  %BNLJoinTranslator_cpp_431_4 = load object umbra::TupleMaterializationChunked %BNLJoinTranslator_cpp_431_, i32 0, i32 0
  %BNLJoinTranslator_cpp_432_ = isnotnull ptr %BNLJoinTranslator_cpp_431_4
  condbr %BNLJoinTranslator_cpp_432_ %loopChunks %loopDoneChunks

loopChunks:
  %chunk = phi ptr [%BNLJoinTranslator_cpp_431_4, %then %BNLJoinTranslator_cpp_672_, %loopDoneTuples]
  %BNLJoinTranslator_cpp_436_ = getelementptr object umbra::TupleMaterializationChunked::Chunk %chunk, i32 1
  %BNLJoinTranslator_cpp_437_ = load object umbra::TupleMaterializationChunked::Chunk %chunk, i32 0, i32 2
  %BNLJoinTranslator_cpp_441_ = cmpne ptr %BNLJoinTranslator_cpp_436_, %BNLJoinTranslator_cpp_437_
  condbr %BNLJoinTranslator_cpp_441_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%BNLJoinTranslator_cpp_436_, %loopChunks %25504, %cont28]
  %MaterializationHelper_cpp_240_ = getelementptr int8 %tuple, i64 1
  %MaterializationHelper_cpp_252_ = load int8 %tuple
  %MaterializationHelper_cpp_253_ = and i8 %MaterializationHelper_cpp_252_, 1
  %MaterializationHelper_cpp_253_5 = cmpne i8 %MaterializationHelper_cpp_253_, 0
  condbr %MaterializationHelper_cpp_253_5 %then6 %else

then6:
  br %cont

else:
  %MaterializationHelper_cpp_259_ = load data128 %MaterializationHelper_cpp_240_
  %MaterializationHelper_cpp_260_ = getelementptr int8 %MaterializationHelper_cpp_240_, i64 16
  br %cont

cont:
  %25478 = phi d128 [d128 {0,0}, %then6 %MaterializationHelper_cpp_259_, %else]
  %25504 = phi ptr [%MaterializationHelper_cpp_240_, %then6 %MaterializationHelper_cpp_260_, %else]
  %BigNumeric_cpp_310_ = call i32 _ZN5umbra17BigNumericRuntime17compareIntShiftUpENS_9data128_tElj (%25478, %MaterializationHelper_cpp_230_2, i32 19)
  %BigNumeric_cpp_408_ = cmpslt i32 %BigNumeric_cpp_310_, 0
  %Value_cpp_126_ = not bool %MaterializationHelper_cpp_253_5
  %Value_cpp_126_7 = and bool %BigNumeric_cpp_408_, %Value_cpp_126_
  condbr %Value_cpp_126_7 %then8 %else27

then8:
  %Text_cpp_459_ = call d128 _ZN5umbra11TextRuntime9substringENS_9data128_tEii (%MaterializationHelper_cpp_230_1, i32 1, i32 2)
  %ConsumerContext_cpp_324_ = call d128 _ZN5umbra11TextRuntime22makeTemporaryTransientENS_9data128_tE (%Text_cpp_459_)
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%ConsumerContext_cpp_324_, i64 3749646514382295044)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_383_, 1023
  %PreaggregationLogic_cpp_20_9 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_9, i32 0, i32 0
  %PreaggregationLogic_cpp_25_10 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_383_
  condbr %PreaggregationLogic_cpp_25_10 %then11 %else12

then11:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_383_)
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_, %ConsumerContext_cpp_324_)
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store int64 i64 1, %GroupByTranslator_cpp_207_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_207_, i64 8
  store int64 %MaterializationHelper_cpp_230_2, %MaterializationHelper_cpp_983_
  br %cont26

else12:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_9, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_36_
  %Text_cpp_86_ = extractdata128 i64 %ConsumerContext_cpp_324_
  %Text_cpp_86_13 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Text_cpp_87_ = cmpeq i64 %Text_cpp_86_, %Text_cpp_86_13
  condbr %Text_cpp_87_ %then14 %cont20

then14:
  %Text_cpp_88_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Text_cpp_88_15 = extractdata128 i64 %ConsumerContext_cpp_324_
  %Text_cpp_88_16 = cmpeq i64 %Text_cpp_88_15, %Text_cpp_88_
  condbr %Text_cpp_88_16 %then17 %else18

then17:
  br %cont19

else18:
  %Text_cpp_91_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%ConsumerContext_cpp_324_, %MaterializationHelper_cpp_876_)
  br %cont19

cont19:
  %26753 = phi bool [bool true, %then17 %Text_cpp_91_, %else18]
  br %cont20

cont20:
  %26789 = phi bool [%26753, %cont19 bool false, %else12]
  %ConsumerContext_cpp_417_ = not bool %26789
  condbr %ConsumerContext_cpp_417_ %then11 %else21

else21:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_, 1
  store int64 %Aggregate_cpp_166_, %GroupByTranslator_cpp_217_
  %MaterializationHelper_cpp_977_22 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  %MaterializationHelper_cpp_977_23 = load int64 %MaterializationHelper_cpp_977_22
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_23, %MaterializationHelper_cpp_230_2 %cont24 %overflow

cont24:
  %MaterializationHelper_cpp_983_25 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 8
  store int64 %Numeric_cpp_777_, %MaterializationHelper_cpp_983_25
  br %cont26

cont26:
  call void _ZN5umbra11TextRuntime13freeTransientENS_9data128_tE (%ConsumerContext_cpp_324_)
  br %cont28

else27:
  br %cont28

cont28:
  %BNLJoinTranslator_cpp_667_ = cmpne ptr %25504, %BNLJoinTranslator_cpp_437_
  condbr %BNLJoinTranslator_cpp_667_ %loopTuples %loopDoneTuples

loopDoneTuples:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  %BNLJoinTranslator_cpp_672_ = load object umbra::TupleMaterializationChunked::Chunk %chunk, i32 0, i32 1
  %BNLJoinTranslator_cpp_673_ = isnotnull ptr %BNLJoinTranslator_cpp_672_
  condbr %BNLJoinTranslator_cpp_673_ %loopChunks %loopDoneChunks

loopDoneChunks:
  br %cont29

cont29:
  br %continue

continue:
  %ChainingHashTableLogic_cpp_181_ = getelementptr int8 %entry, i64 8
  %ChainingHashTableLogic_cpp_181_30 = load int8* %ChainingHashTableLogic_cpp_181_
  %ChainingHashTableLogic_cpp_182_ = isnotnull ptr %ChainingHashTableLogic_cpp_181_30
  condbr %ChainingHashTableLogic_cpp_182_ %loopEntries %loopDoneEntries

loopDoneEntries:
  %ChainingHashTableLogic_cpp_185_ = getelementptr int64 %slot, i32 1
  %ChainingHashTableLogic_cpp_186_ = cmpne ptr %ChainingHashTableLogic_cpp_185_, %ChainingHashTableLogic_cpp_160_0
  condbr %ChainingHashTableLogic_cpp_186_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 27

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare int32 @_ZN5umbra17BigNumericRuntime17compareIntShiftUpENS_9data128_tElj(data128 %25530, int64 %25544, int32 %25558)

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %26680, data128 %26694)

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25080
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

define int32 @_9_groupby_map_join_join_tablescan_orders_extra19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %GroupByTranslator_cpp_112_
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_2 = load data128 %GroupByTranslator_cpp_113_
  %Text_cpp_86_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Text_cpp_86_3 = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Text_cpp_87_ = cmpeq i64 %Text_cpp_86_, %Text_cpp_86_3
  condbr %Text_cpp_87_ %then4 %cont8

then4:
  %Text_cpp_88_ = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Text_cpp_88_5 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Text_cpp_88_6 = cmpeq i64 %Text_cpp_88_5, %Text_cpp_88_
  condbr %Text_cpp_88_6 %then7 %else

then7:
  br %cont

else:
  %Text_cpp_91_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_2)
  br %cont

cont:
  %29508 = phi bool [bool true, %then7 %Text_cpp_91_, %else]
  br %cont8

cont8:
  %29544 = phi bool [%29508, %cont bool false, %then]
  %ConsumerContext_cpp_417_ = not bool %29544
  condbr %ConsumerContext_cpp_417_ %noMatch %else9

else9:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 32
  %GroupByTranslator_cpp_121_10 = getelementptr int8 %chainEntry, i64 32
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_10
  %MaterializationHelper_cpp_977_11 = load int64 %GroupByTranslator_cpp_121_
  %Aggregate_cpp_175_ = add i64 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_11
  store int64 %Aggregate_cpp_175_, %GroupByTranslator_cpp_121_10
  %MaterializationHelper_cpp_977_12 = getelementptr int8 %GroupByTranslator_cpp_121_10, i64 8
  %MaterializationHelper_cpp_977_13 = load int64 %MaterializationHelper_cpp_977_12
  %MaterializationHelper_cpp_977_14 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 8
  %MaterializationHelper_cpp_977_15 = load int64 %MaterializationHelper_cpp_977_14
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_13, %MaterializationHelper_cpp_977_15 %cont16 %overflow

cont16:
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_121_10, i64 8
  store int64 %Numeric_cpp_777_, %MaterializationHelper_cpp_983_
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_17 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_17, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 48
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 29

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25080
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1894)
  return 0
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %31352)

define int32 @_9_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_140_
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_876_1 = load int64 %GroupByTranslator_cpp_248_
  %MaterializationHelper_cpp_977_ = getelementptr int8 %GroupByTranslator_cpp_248_, i64 8
  %MaterializationHelper_cpp_977_2 = load int64 %MaterializationHelper_cpp_977_
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 32)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_876_)
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  store int64 %MaterializationHelper_cpp_876_1, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 8
  store int64 %MaterializationHelper_cpp_977_2, %MaterializationHelper_cpp_150_
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 33
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %32276, int64 %32290)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %32350, data128 %32364)

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

define int32 @_9_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49672
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 36
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %33148)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %33230, object umbra::SortOperator* %33244)

define int32 @_9_planStep25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49672
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %33388)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 49672
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 38)
  return 37
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %33472, int8* %33486, int8* %33500)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %33641, object umbra::SortOperator* %33655)

define int32 @_9_sort_groupby_extra26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49672
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %33388, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 38
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %33905, int8* %33919, int8* %33933, int32 %33947)

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49672
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 39, i32 40, i32 41)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 42)
  return 43
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %34199, object umbra::SortOperator* %34213, bool %34227)

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep30(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load int64 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 8
  %MaterializationHelper_cpp_230_2 = load int64 %MaterializationHelper_cpp_229_
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x561a35bcf7c0, i64 792633534417207296, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %35594, i32 1)
  call void _ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x561a35bcf7c0, i64 360287970189639680, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %35594, i32 1)
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x561a35bcf7c0, i64 432345564428894720, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 42
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %35385, int8 %35399)

declare void @_ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %35526, int64 %35540, data128 %35554)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %35616, int32 %35630)

declare void @_ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %35680, int64 %35694, int64 %35708)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %35784, int64 %35798, int64 %35812)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %35888)

define int32 @_9_planStep31(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 216
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 24816
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 24912
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 25008
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 25056
  call void _ZN5umbra12TempOperator7destroyEPS0_ (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 25080
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 49672
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_6)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %36310)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %36393)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %36614)
`;