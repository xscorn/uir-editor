export const tpch12 = `const %0[40] ="\\000\\000\\000\\000\\034\\000\\000\\000\\020\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\004\\000\\000\\000MAIL\\000\\000\\000\\000\\004\\000\\000\\000SHIP"

const %67[46] ="\\000\\000\\000\\000 \\000\\000\\000\\000\\000\\000\\000\\020\\000\\000\\000\\000\\000\\000\\000\\010\\000\\000\\0001-URGENT\\000\\000\\000\\000\\006\\000\\000\\0002-HIGH"

const %1103[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1459[72] ="\\014\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000=V\\000\\000\\0**_%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0006a%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1569[20] ="\\000\\000\\000\\000\\012\\000\\000\\000\\013\\000\\000\\000\\014\\000\\000\\000\\016\\000\\000\\000"

const %7586[0] =""

const %7625[8] ="\\000\\000\\000\\000\\005\\000\\000\\000"

const %20639[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %22852[1] =" "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_2, i64 24)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_4, %state, global %1103)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_230_0 = load data128 %right
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_0)
  return %Char_cpp_136_
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %505, data128 %519)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %653)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %863, int32 %877)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %1002, int64 %1016)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1237, int8* %1251, int8* %1265)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %1459, i64 1, global %1569, i32 5)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1708, int8* %1722, int64 %1736, object umbra::Relation::RestrictionInfo* %1750, int64 %1764, int32* %1778, int32 %1792)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %1888, int32 %1902, int32 %1916, int32 %1930, int32 %1944)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %2126)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2278)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2400, int32 %2414)

define int32 @_10_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4194304
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2449718
  %Date_cpp_57_6 = cmpule i32 2449354, %RelationMappedLogic_cpp_310_
  %TableScanTranslator_cpp_425_ = and bool %Date_cpp_57_6, %Date_cpp_57_
  condbr %TableScanTranslator_cpp_425_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_7 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 5505024
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_7, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_8 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_9 = add i64 %RelationMappedLogic_cpp_320_8, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_10 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_9, %RelationMappedLogic_cpp_320_8
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_10
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 62
  %InExpressionTranslator_cpp_145_11 = load int32 global %0, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_11, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_11, %then %InExpressionTranslator_cpp_164_, %cont]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %0, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_, %MaterializationHelper_cpp_230_)
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_113_13 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_13
  condbr %Char_cpp_114_ %then14 %cont19

then14:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_115_15 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_16 = cmpeq i64 %Char_cpp_115_15, %Char_cpp_115_
  condbr %Char_cpp_115_16 %then17 %else

then17:
  br %cont18

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, %MaterializationHelper_cpp_620_)
  br %cont18

cont18:
  %5369 = phi bool [bool true, %then17 %Char_cpp_118_, %else]
  br %cont19

cont19:
  %5412 = phi bool [%5369, %cont18 bool false, %loopInTable]
  %ConsumerContext_cpp_417_ = not bool %5412
  condbr %ConsumerContext_cpp_417_ %cont %else20

else20:
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
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else20]
  condbr %InExpressionTranslator_cpp_182_ %then21 %contScan

then21:
  %RelationMappedLogic_cpp_303_22 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3932160
  %RelationMappedLogic_cpp_310_23 = load int32 %RelationMappedLogic_cpp_303_22, %localTid
  %Date_cpp_54_ = cmpult i32 %RelationMappedLogic_cpp_310_23, %RelationMappedLogic_cpp_310_
  condbr %Date_cpp_54_ %then24 %contScan

then24:
  %RelationMappedLogic_cpp_303_25 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_26 = load int32 %RelationMappedLogic_cpp_303_25, %localTid
  %Date_cpp_54_27 = cmpult i32 %RelationMappedLogic_cpp_310_26, %RelationMappedLogic_cpp_310_23
  condbr %Date_cpp_54_27 %then28 %contScan

then28:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_29 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_30 = mul i64 %Hash_cpp_380_29, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_30, i64 20)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
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
}

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %4388, int64 %4402)

declare data128 @_ZN5umbra11TextRuntime17deserializeStringEPKhj(int8* %4916, int32 %4930)

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %5295, data128 %5309)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %6330, int64 %6344, int64 %6358)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %6504, data128 %6518)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %6924)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %7006, int8* %7020, int32 %7034)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %7074, int32 %7088)

define int32 @_10_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %7332, object umbra::ChainingHashTable::Collector* %7346)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %7586, i64 0, global %7625, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %7472)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %7504)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 24)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %7941, int64 %7955)

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %8111)

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_groupby_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
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
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
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
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_10 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_11 = add i64 %RelationMappedLogic_cpp_320_10, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_12 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_11, %RelationMappedLogic_cpp_320_10
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_12
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%RelationMappedLogic_cpp_324_, i64 3749646514382295044)
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_383_, 62
  %InExpressionTranslator_cpp_145_13 = load int32 global %67, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_13, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_13, %else %InExpressionTranslator_cpp_164_, %cont]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %67, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_14 = load int32 %InExpressionTranslator_cpp_153_
  %MaterializationHelper_cpp_233_15 = getelementptr int8 %InExpressionTranslator_cpp_153_, i64 4
  %MaterializationHelper_cpp_620_ = call d128 _ZN5umbra11TextRuntime17deserializeStringEPKhj (%MaterializationHelper_cpp_233_15, %MaterializationHelper_cpp_230_14)
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_113_17 = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_17
  condbr %Char_cpp_114_ %then %cont23

then:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_620_
  %Char_cpp_115_18 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_19 = cmpeq i64 %Char_cpp_115_18, %Char_cpp_115_
  condbr %Char_cpp_115_19 %then20 %else21

then20:
  br %cont22

else21:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, %MaterializationHelper_cpp_620_)
  br %cont22

cont22:
  %11488 = phi bool [bool true, %then20 %Char_cpp_118_, %else21]
  br %cont23

cont23:
  %11524 = phi bool [%11488, %cont22 bool false, %loopInTable]
  %ConsumerContext_cpp_417_24 = not bool %11524
  condbr %ConsumerContext_cpp_417_24 %cont %else25

else25:
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
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else25]
  condbr %InExpressionTranslator_cpp_182_ %then26 %cont27

then26:
  br %case

cont27:
  br %case

case:
  %SearchedCaseTranslator_cpp_66_ = phi i32 [i32 1, %then26 i32 0, %cont27]
  %Char_cpp_113_29 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_30 = cmpeq i64 %Char_cpp_113_29, 5932697772607143944
  condbr %Char_cpp_114_30 %then31 %cont38

then31:
  %Char_cpp_115_32 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_33 = cmpeq i64 %Char_cpp_115_32, 1414415687
  condbr %Char_cpp_115_33 %then34 %else35

then34:
  br %cont37

else35:
  %Char_cpp_118_36 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5932697772607143944,1414415687})
  br %cont37

cont37:
  %12160 = phi bool [bool true, %then34 %Char_cpp_118_36, %else35]
  br %cont38

cont38:
  %12196 = phi bool [%12160, %cont37 bool false, %case]
  %TypeLogic_cpp_278_ = not bool %12196
  %Char_cpp_113_39 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_40 = cmpeq i64 %Char_cpp_113_39, 5280520255863521286
  condbr %Char_cpp_114_40 %then41 %cont48

then41:
  %Char_cpp_115_42 = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_43 = cmpeq i64 %Char_cpp_115_42, 18503
  condbr %Char_cpp_115_43 %then44 %else45

then44:
  br %cont47

else45:
  %Char_cpp_118_46 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5280520255863521286,18503})
  br %cont47

cont47:
  %12509 = phi bool [bool true, %then44 %Char_cpp_118_46, %else45]
  br %cont48

cont48:
  %12545 = phi bool [%12509, %cont47 bool false, %cont38]
  %TypeLogic_cpp_278_49 = not bool %12545
  %ConsumerContext_cpp_381_ = and bool %TypeLogic_cpp_278_, %TypeLogic_cpp_278_49
  condbr %ConsumerContext_cpp_381_ %then50 %cont51

then50:
  br %case28

cont51:
  br %case28

case28:
  %SearchedCaseTranslator_cpp_66_52 = phi i32 [i32 1, %then50 i32 0, %cont51]
  %Hash_cpp_383_53 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_8, i64 3749646514382295044)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_383_53, 1023
  %PreaggregationLogic_cpp_20_54 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_54, i32 0, i32 0
  %PreaggregationLogic_cpp_25_55 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_383_53
  condbr %PreaggregationLogic_cpp_25_55 %then56 %else57

then56:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_383_53)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_, %MaterializationHelper_cpp_230_8)
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store int32 %SearchedCaseTranslator_cpp_66_, %GroupByTranslator_cpp_207_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_207_, i64 4
  store int32 %SearchedCaseTranslator_cpp_66_52, %MaterializationHelper_cpp_983_
  br %cont78

else57:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_54, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_36_
  %Char_cpp_113_58 = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Char_cpp_113_59 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_114_60 = cmpeq i64 %Char_cpp_113_58, %Char_cpp_113_59
  condbr %Char_cpp_114_60 %then61 %cont69

then61:
  %Char_cpp_115_62 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_63 = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Char_cpp_115_64 = cmpeq i64 %Char_cpp_115_63, %Char_cpp_115_62
  condbr %Char_cpp_115_64 %then65 %else66

then65:
  br %cont68

else66:
  %Char_cpp_118_67 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_8, %MaterializationHelper_cpp_876_)
  br %cont68

cont68:
  %13743 = phi bool [bool true, %then65 %Char_cpp_118_67, %else66]
  br %cont69

cont69:
  %13779 = phi bool [%13743, %cont68 bool false, %else57]
  %ConsumerContext_cpp_417_70 = not bool %13779
  condbr %ConsumerContext_cpp_417_70 %then56 %else71

else71:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_977_ = load int32 %GroupByTranslator_cpp_217_
  %Integer_cpp_193_ = checkedsadd i32 %MaterializationHelper_cpp_977_, %SearchedCaseTranslator_cpp_66_ %cont72 %overflow

cont72:
  store int32 %Integer_cpp_193_, %GroupByTranslator_cpp_217_
  %MaterializationHelper_cpp_977_73 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 4
  %MaterializationHelper_cpp_977_74 = load int32 %MaterializationHelper_cpp_977_73
  %Integer_cpp_193_76 = checkedsadd i32 %MaterializationHelper_cpp_977_74, %SearchedCaseTranslator_cpp_66_52 %cont75 %overflow

cont75:
  %MaterializationHelper_cpp_983_77 = getelementptr int8 %GroupByTranslator_cpp_217_, i64 4
  store int32 %Integer_cpp_193_76, %MaterializationHelper_cpp_983_77
  br %cont78

cont78:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_79 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_79 %cancellation %continueProbe

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
  return 12

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %9666, int64 %9680)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %13098, int64 %13112)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %13176, data128 %13190)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %14534, int8* %14548)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %15059, int8* %15073, int64 %15087)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %15178, int8* %15192)

define int32 @_10_groupby_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
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
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_113_3 = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_3
  condbr %Char_cpp_114_ %then4 %cont8

then4:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Char_cpp_115_5 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_6 = cmpeq i64 %Char_cpp_115_5, %Char_cpp_115_
  condbr %Char_cpp_115_6 %then7 %else

then7:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_2)
  br %cont

cont:
  %16723 = phi bool [bool true, %then7 %Char_cpp_118_, %else]
  br %cont8

cont8:
  %16759 = phi bool [%16723, %cont bool false, %then]
  %ConsumerContext_cpp_417_ = not bool %16759
  condbr %ConsumerContext_cpp_417_ %noMatch %else9

else9:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 32
  %GroupByTranslator_cpp_121_10 = getelementptr int8 %chainEntry, i64 32
  %MaterializationHelper_cpp_977_ = load int32 %GroupByTranslator_cpp_121_10
  %MaterializationHelper_cpp_977_11 = load int32 %GroupByTranslator_cpp_121_
  %Integer_cpp_193_ = checkedsadd i32 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_11 %cont12 %overflow

cont12:
  store int32 %Integer_cpp_193_, %GroupByTranslator_cpp_121_10
  %MaterializationHelper_cpp_977_13 = getelementptr int8 %GroupByTranslator_cpp_121_10, i64 4
  %MaterializationHelper_cpp_977_14 = load int32 %MaterializationHelper_cpp_977_13
  %MaterializationHelper_cpp_977_15 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 4
  %MaterializationHelper_cpp_977_16 = load int32 %MaterializationHelper_cpp_977_15
  %Integer_cpp_193_18 = checkedsadd i32 %MaterializationHelper_cpp_977_14, %MaterializationHelper_cpp_977_16 %cont17 %overflow

cont17:
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_121_10, i64 4
  store int32 %Integer_cpp_193_18, %MaterializationHelper_cpp_983_
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
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 40
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
  return 15

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %15538)

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %18247, int8* %18261)

define int32 @_10_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1103)
  return 0
}

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %18617)

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_977_ = load int32 %GroupByTranslator_cpp_248_
  %MaterializationHelper_cpp_977_1 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 4
  %MaterializationHelper_cpp_977_2 = load int32 %MaterializationHelper_cpp_977_1
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 24)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_876_)
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  store int32 %MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 4
  store int32 %MaterializationHelper_cpp_977_2, %MaterializationHelper_cpp_150_
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
  return 19
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %19555, int64 %19569)

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

define int32 @_10_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 22
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %20399)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %20481, object umbra::SortOperator* %20495)

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %20639)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 24960
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 23
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %20723, int8* %20737, int8* %20751)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %20892, object umbra::SortOperator* %20906)

define int32 @_10_sort_groupby_extra15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %20639, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 24
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %21156, int8* %21170, int8* %21184, int32 %21198)

define int32 @_10_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 25, i32 26, i32 27)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 28)
  return 29
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %21450, object umbra::SortOperator* %21464, bool %21478)

define int32 @_10_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_230_1 = load int32 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 4
  %MaterializationHelper_cpp_230_2 = load int32 %MaterializationHelper_cpp_229_
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
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x563d8aabb7c0, i64 720575940547051520, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %22852, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x563d8aabb7c0, i64 288230376151711744, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %22852, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x563d8aabb7c0, i64 288230376151711744, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 28
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %22643, int8 %22657)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %22784, int64 %22798, data128 %22812)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %22874, int32 %22888)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %22938, int64 %22952, int32 %22966)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %23090)

define int32 @_10_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 24960
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_3)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %23512)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %23664)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %23747)
`;